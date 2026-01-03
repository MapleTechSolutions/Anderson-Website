// src/match.js
import faqDatabase from './faqData';

// Normalization: lowercase, remove punctuation, trim
function normalize(s) {
  return (s || '').toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function tokenize(s) {
  if (!s) return [];
  return normalize(s).split(' ').filter(Boolean);
}

// compute match score (0..1)
function scoreForEntry(tokens, entry) {
  // exact phrase match (strong)
  for (const kw of entry.keywords) {
    if (!kw) continue;
    const nkw = normalize(kw);
    if (nkw.length > 2 && tokens.join(' ').includes(nkw)) {
      // phrase hit gets high score (0.9 +)
      return 0.95;
    }
  }

  // token-level matching
  const entryTokens = new Set();
  for (const kw of entry.keywords) {
    for (const t of tokenize(kw)) entryTokens.add(t);
  }

  let hits = 0;
  for (const t of tokens) {
    if (entryTokens.has(t)) hits++;
  }

  // score = fraction of distinct entry tokens matched (capped)
  if (entryTokens.size === 0) return 0;
  const raw = hits / entryTokens.size;

  // boost short entries slightly
  const boost = entryTokens.size <= 2 ? 0.1 : 0;
  return Math.min(1, raw + boost);
}

// main exported function
export function getBotReply(message, { threshold = 0.25 } = {}) {
  const norm = normalize(message);
  if (!norm) return "Please enter a question or choose an option.";

  const tokens = tokenize(message);

  // quick exact question match (optional)
  for (const e of faqDatabase) {
    if (normalize(e.question) === norm) return { answer: e.answer, source: null, score: 1 };
  }

  // score all entries
  let best = null;
  let bestScore = 0;
  for (const entry of faqDatabase) {
    const s = scoreForEntry(tokens, entry);
    if (s > bestScore) {
      bestScore = s;
      best = entry;
    }
  }

  if (best && bestScore >= threshold) {
    return { answer: best.answer, source: null, score: bestScore, question: best.question };
  }

  // fallback: suggest top keywords / quick replies
  // choose a short friendly fallback message
  return {
    answer: "I can help with questions about our services, booking a consultation, contact details, insurance or investment products. Try: 'What services do you offer?' or 'How do I book a consultation?'",
    source: null,
    score: 0
  };
}
