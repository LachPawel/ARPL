/**
 * Tiny UI sound engine. Every sound is synthesized with WebAudio, so there
 * are no audio files to load. On by default, turning it off is remembered.
 * Browsers keep audio locked until the first click or key press, so hover
 * sounds start after the visitor first interacts with the page.
 */

import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'sound';

let enabled = (() => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'off';
  } catch {
    return true;
  }
})();

let ctx: AudioContext | null = null;
let unlocked = false;
let lastTick = 0;
const listeners = new Set<() => void>();

const audio = () => {
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
};

const tone = (freq: number, start: number, duration: number, volume: number, type: OscillatorType = 'square') => {
  const ac = audio();
  const t = ac.currentTime + start;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  gain.gain.setValueAtTime(volume, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(gain).connect(ac.destination);
  osc.start(t);
  osc.stop(t + duration + 0.02);
};

// The first click, tap or key press anywhere unlocks audio for the whole visit.
// Browsers differ in which events count as a gesture, so keep trying on each
// of them until the context is actually running.
const GESTURES = ['pointerdown', 'mousedown', 'click', 'touchend', 'keydown'];

const unlock = () => {
  const first = !unlocked;
  unlocked = true;
  try {
    const ac = audio();
    // Short start-up chime so the visitor knows sound is live
    if (first) play(() => [523, 784].forEach((f, i) => tone(f, i * 0.05, 0.07, 0.03, 'triangle')));
    if (ac.state === 'running') {
      GESTURES.forEach((e) => window.removeEventListener(e, unlock, true));
    }
  } catch {
    // WebAudio unavailable, stay silent
  }
};
GESTURES.forEach((e) => window.addEventListener(e, unlock, true));

const play = (fn: () => void) => {
  if (!enabled || !unlocked) return;
  try {
    fn();
  } catch {
    // WebAudio unavailable, stay silent
  }
};

export const sound = {
  /** Soft tick for hovering rows and segments. Throttled. */
  tick: () =>
    play(() => {
      const now = performance.now();
      if (now - lastTick < 45) return;
      lastTick = now;
      tone(2400, 0, 0.018, 0.025);
    }),

  /** Two-step blip for clicks. */
  click: () =>
    play(() => {
      tone(880, 0, 0.04, 0.04);
      tone(1320, 0.035, 0.05, 0.035);
    }),

  /** Short sweep for theme changes. */
  swap: () =>
    play(() => {
      tone(440, 0, 0.06, 0.04, 'triangle');
      tone(660, 0.05, 0.06, 0.04, 'triangle');
    }),

  /** Very quiet chatter while scrambled text resolves. */
  chatter: () =>
    play(() => {
      tone(1200 + Math.random() * 1600, 0, 0.012, 0.012);
    }),
};

export const isSoundOn = () => enabled;

export const toggleSound = () => {
  enabled = !enabled;
  try {
    localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off');
  } catch {
    // storage blocked, the toggle still works for this visit
  }
  if (enabled) {
    // Rising arpeggio confirms sound is on
    play(() => [523, 659, 784].forEach((f, i) => tone(f, i * 0.06, 0.08, 0.04, 'triangle')));
  }
  listeners.forEach((l) => l());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const useSoundEnabled = () => useSyncExternalStore(subscribe, isSoundOn);
