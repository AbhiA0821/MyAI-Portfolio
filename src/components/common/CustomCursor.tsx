import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'button' | 'ai' | 'card'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || isReducedMotion) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // If user is focused/typing in an input field or textarea (e.g. Chatbot query input), hide custom cursor
      const isInputOrTextArea = target.closest('input, textarea, [contenteditable="true"]');
      if (isInputOrTextArea) {
        setIsVisible(false);
        return;
      } else if (!isTyping) {
        setIsVisible(true);
      }

      const interactiveBtn = target.closest('button, a');
      const aiElement = target.closest('[data-ai-element="true"], .ai-node');
      const cardElement = target.closest('.group, [data-card="true"]');

      if (aiElement) {
        setIsHovered(true);
        setHoverType('ai');
      } else if (interactiveBtn) {
        setIsHovered(true);
        setHoverType('button');
      } else if (cardElement) {
        setIsHovered(true);
        setHoverType('card');
      } else {
        setIsHovered(false);
        setHoverType('default');
      }
    };

    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        setIsTyping(true);
        setIsVisible(false);
      }
    };

    const onFocusOut = () => {
      setIsTyping(false);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => {
      if (!isTyping) setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('focusin', onFocusIn);
    window.addEventListener('focusout', onFocusOut);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('focusin', onFocusIn);
      window.removeEventListener('focusout', onFocusOut);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isTyping]);

  if (!isVisible || isTyping) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Primary Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovered ? (hoverType === 'button' ? 2 : hoverType === 'ai' ? 2.5 : 1.5) : 1
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.1 }}
      />

      {/* Secondary Outer Data Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border ${
          hoverType === 'ai'
            ? 'border-purple-400 w-12 h-12 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
            : hoverType === 'button'
            ? 'border-cyan-400 w-10 h-10'
            : 'border-slate-600/40 w-8 h-8'
        }`}
        animate={{
          x: position.x - (hoverType === 'ai' ? 24 : hoverType === 'button' ? 20 : 16),
          y: position.y - (hoverType === 'ai' ? 24 : hoverType === 'button' ? 20 : 16),
          scale: isHovered ? 1.2 : 0.8,
          opacity: isHovered ? 0.9 : 0.4
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
      />
    </div>
  );
};
