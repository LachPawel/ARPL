import React from 'react';
import { Section } from '../ui';
import { sound } from '../../lib/sound';

const items = [
  {
    text: 'Active supporter of Node.js Warsaw & Founder Running Club Warsaw',
    links: [
      { label: 'Node.js Warsaw', url: 'https://www.meetup.com/node-js-warsaw/' },
      { label: 'Running Club', url: 'https://www.meetup.com/founders-running-club-warsaw/' },
      { label: 'Social Coding Edition Organizer', url: 'https://www.meetup.com/node-js-warsaw/events/296993184/' },
    ],
  },
  {
    text: 'Ran the Voice AI in the Wild track for ai-coustics with telli at Big Berlin Hack 2026 by {Tech: Europe}, 400 builders in 36 hours. A year after taking 2nd place at a {Tech: Europe} hackathon myself.',
    links: [
      { label: 'Recap video', url: 'https://www.youtube.com/watch?v=DusDhLgt3Us' },
    ],
  },
  {
    text: 'Spoke at multiple meetups including: Warsaw.js, Node.js Warsaw, PitchMeBaby, and StartupGrind Warsaw',
    links: [
      { label: 'ZK Talk', url: 'https://www.youtube.com/watch?v=AoG1wzCibJQ' },
      { label: 'When Robots Judge Your Posture', url: 'https://www.youtube.com/watch?v=jF7zOf7sG9o' },
    ],
  },
  {
    text: 'PitchMeBaby startup pitch contest winner (December 2024)',
    links: [
      { label: 'Instagram Post', url: 'https://www.instagram.com/p/DDo7Eqks6Zz/' },
      { label: 'Winning Pitch Video', url: 'https://www.youtube.com/watch?v=NMk20KeD-ec' },
    ],
  },
  {
    text: 'Open Source Contributor',
    links: [
      { label: 'RiscZero Tutorial', url: 'https://youtu.be/mQQePxfE1sE' },
      { label: 'Contribution to RiscZero Docs', url: 'https://x.com/RiscZero/status/1664270670203854850' },
    ],
  },
];

export const CommunitySection: React.FC = () => (
  <Section id="community" title="Community">
    <ol>
      {items.map((item, i) => (
        <li
          key={item.text}
          onMouseEnter={sound.tick}
          className="grid sm:grid-cols-[160px_1fr] gap-x-8 gap-y-2 py-6 border-b border-line first:pt-2"
        >
          <p className="font-semibold tabular-nums">{String(i + 1).padStart(2, '0')}</p>
          <div>
            <p className="leading-relaxed">{item.text}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {item.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-fg transition-colors"
                  onClick={sound.click}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);
