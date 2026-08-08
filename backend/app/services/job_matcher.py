from typing import Dict, List, Any

class JobMatchingEngine:
    def calculate_match(self, job_title: str, required_skills: List[str], candidate_skills: List[str]) -> Dict[str, Any]:
        req_set = set([s.lower() for s in required_skills])
        cand_set = set([s.lower() for s in candidate_skills])

        matched = list(req_set.intersection(cand_set))
        missing = list(req_set.difference(cand_set))

        skill_match_score = (len(matched) / len(req_set)) * 100 if req_set else 100.0
        
        # Transparent Score Formula Weights
        overall_score = round((skill_match_score * 0.50) + 42.0, 1) # baseline weighting
        overall_score = min(overall_score, 98.5)

        return {
            "job_title": job_title,
            "overall_match_score": overall_score,
            "skill_match_score": round(skill_match_score, 1),
            "matched_skills": [s.title() for s in matched],
            "missing_skills": [s.title() for s in missing],
            "recommendation": f"To reach 95%+ match score for {job_title}, focus on adding: {', '.join([s.title() for s in missing[:3]])}" if missing else "Exceptional fit! Ready for application."
        }

job_matcher = JobMatchingEngine()
