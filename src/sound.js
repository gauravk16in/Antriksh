let context = null;
let enabled = false;

export function setSoundEnabled(value) { enabled = value; }

function getContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!context) context = new AudioContextClass();
  if (context.state === 'suspended') context.resume();
  return context;
}

// Each note is [frequency in Hz, start time in seconds, length in seconds]
const SOUNDS = {
  click: [[660, 0, 0.06]],
  select: [[520, 0, 0.06], [780, 0.06, 0.09]],
  open: [[440, 0, 0.07], [660, 0.07, 0.07], [880, 0.14, 0.1]],
  close: [[660, 0, 0.07], [440, 0.07, 0.1]],
  on: [[523, 0, 0.08], [659, 0.08, 0.08], [784, 0.16, 0.14]],
};

export function playSound(name) {
  if (!enabled) return;
  const audio = getContext();
  const notes = SOUNDS[name];
  if (!audio || !notes) return;
  const now = audio.currentTime;
  notes.forEach(([frequency, start, length]) => {
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = 'square';
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.04, now + start);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + start + length);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start(now + start);
    oscillator.stop(now + start + length + 0.02);
  });
}