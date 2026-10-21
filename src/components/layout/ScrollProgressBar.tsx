import React, { useEffect, useState } from 'react';

/** Thin reading progress line under the navigation, plus a percentage readout */
export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <div className="fixed top-14 left-0 right-0 h-px z-40 bg-fg origin-left" style={{ transform: `scaleX(${progress})` }} />
      <div className="fixed bottom-4 right-4 z-40 text-xs text-faint tabular-nums hidden sm:block" aria-hidden>
        {String(Math.round(progress * 100)).padStart(3, '0')}%
      </div>
    </>
  );
};
