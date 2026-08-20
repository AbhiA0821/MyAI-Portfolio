import sys
import os
import asyncio

# Ensure backend root is in sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../../..")))

from backend.app.rag.engine import rag_engine
from backend.app.agents.orchestrator import orchestrator

TEST_QUESTIONS = [
    ("Which college does Abhishek study at?", ["Annasaheb Dange", "ADCET", "Engineering"]),
    ("What degree is he pursuing?", ["B.Tech", "Artificial Intelligence", "Data Science"]),
    ("What projects has he built?", ["MedIntel", "HireAgent", "Art Generation", "CycleGAN"]),
    ("What is his main ongoing project?", ["MedIntel", "HireAgent", "ONGOING"]),
    ("What technologies does he use?", ["Python", "SQL", "PySpark", "DuckDB", "RAG"]),
    ("Where did he complete his SQL internship?", ["TecSpeak", "Sangli"]),
    ("What certifications does he have?", ["Oracle", "Generative AI", "Data Science", "Infosys"]),
    ("What is his GitHub?", ["github.com/AbhiA0821"]),
    ("What is his LinkedIn?", ["linkedin.com/in/abhishek-ainapure"]),
    ("What is his CGPA?", ["8.26", "cgpa"]),
    # Unknown / Unverified questions — MUST NOT HALLUCINATE
    ("What is Abhishek's favorite food?", ["don't have verified information", "NO_VERIFIED_CONTEXT"]),
    ("What is his phone password?", ["don't have verified information", "NO_VERIFIED_CONTEXT"]),
    ("What company will he join in 2030?", ["don't have verified information", "NO_VERIFIED_CONTEXT"])
]

async def run_tests_async():
    print("=" * 60)
    print("RUNNING GROUNDED RAG ASSISTANT VERIFICATION TESTS")
    print("=" * 60)

    passed_count = 0
    total_count = len(TEST_QUESTIONS) + 1

    for idx, (question, expected_keywords) in enumerate(TEST_QUESTIONS, 1):
        print(f"\n[{idx}/{total_count}] Query: '{question}'")
        
        # 1. Test Retrieval Engine
        docs = rag_engine.search(question, top_k=3)
        formatted_context = rag_engine.format_context(docs)
        
        print(f"    Retrieved {len(docs)} documents.")
        for d in docs:
            print(f"      - Chunk: {d['title']} | Score: {d.get('retrieval_score', 0)} | Category: {d.get('category')}")
        
        # 2. Test Orchestrator Stream Response
        orchestrator_output = ""
        async for chunk in orchestrator.route_and_execute_stream(question):
            orchestrator_output += chunk
            
        print(f"    Agent Output Preview: {orchestrator_output[:120]}...")

        # 3. Check Expected Keywords in Context or Stream Output
        combined_text = (formatted_context + " " + orchestrator_output).lower()
        matched_keywords = [kw for kw in expected_keywords if kw.lower() in combined_text]
        
        if formatted_context == "NO_VERIFIED_CONTEXT" or "don't have verified information" in orchestrator_output.lower():
            if any("don't have verified" in kw.lower() or "no_verified_context" in kw.lower() for kw in expected_keywords):
                matched_keywords = expected_keywords

        if matched_keywords:
            print(f"    PASSED [OK] (Matched: {matched_keywords})")
            passed_count += 1
        else:
            print(f"    FAILED [FAIL] (Expected any of {expected_keywords})")

    # Multi-turn Follow-up Test ("explain any one")
    print(f"\n[{total_count}/{total_count}] Query: 'explain any one' (Multi-Turn Follow-up)")
    history = [
        {"role": "user", "content": "What projects has he built?"},
        {"role": "assistant", "content": "Abhishek has built MedIntel, HireAgent, and Art Generation using CycleGANs."}
    ]
    multiturn_output = ""
    async for chunk in orchestrator.route_and_execute_stream("explain any one", conversation_history=history):
        multiturn_output += chunk

    print(f"    Agent Output Preview: {multiturn_output[:120]}...")
    if any(kw.lower() in multiturn_output.lower() for kw in ["medintel", "hireagent", "cyclegan", "project"]):
        print("    PASSED [OK] (Conversational Follow-up Resolved Successfully)")
        passed_count += 1
    else:
        print("    FAILED [FAIL] (Multi-turn Follow-up Failed)")

    print("\n" + "=" * 60)
    print(f"TEST SUMMARY: {passed_count}/{total_count} PASSED")
    print("=" * 60)

    if passed_count == total_count:
        print("ALL RAG VERIFICATION TESTS PASSED SUCCESSFULLY!")
        return True
    else:
        print("SOME TESTS FAILED - CHECK OUTPUT ABOVE")
        return False

if __name__ == "__main__":
    success = asyncio.run(run_tests_async())
    sys.exit(0 if success else 1)
