import React, { useEffect, useState } from 'react';
import { Scramble } from '../ui';
import { formatClock } from '../../utils/format';
import { BOOT_EVENT } from '../layout/BootScreen';

const motto = ['Act', 'Reflect', 'Persist', 'Learn'];

export const HeroSection: React.FC = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Decode the name again, with sound, once the visitor enters through the boot screen
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const onBoot = () => setEntered(true);
    window.addEventListener(BOOT_EVENT, onBoot);
    return () => window.removeEventListener(BOOT_EVENT, onBoot);
  }, []);

  return (
    <section className="pt-12 sm:pt-20">
      <p className="kicker text-muted tabular-nums rise">{formatClock(now)}</p>

      <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight">
        <Scramble text="Pawel Lach" onView active={entered} />
      </h1>

      <p className="mt-6 text-lg sm:text-xl rise" style={{ animationDelay: '100ms' }}>
        DevRel at ai-coustics · Software Engineer · Educator
      </p>

      <p className="mt-4 max-w-2xl text-muted leading-relaxed rise" style={{ animationDelay: '200ms' }}>
        Winner in the world's largest hackathon (10,000+ projects). Former university lecturer.
      </p>

      <p className="mt-8 kicker rise" style={{ animationDelay: '300ms' }}>
        {motto.map((word, i) => (
          <React.Fragment key={word}>
            {i > 0 && <span className="text-faint"> · </span>}
            <span className="font-semibold">{word[0]}</span>
            <span className="text-muted">{word.slice(1)}</span>
          </React.Fragment>
        ))}
      </p>
    </section>
  );
};
