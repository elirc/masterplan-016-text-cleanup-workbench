export function cleanText(text) {
  if (typeof text !== 'string') throw new TypeError('Text must be a string.');
  return text.trim().replace(/\s+/gu, ' ');
}
export function cleanList(source) {
  if (!Array.isArray(source)) throw new TypeError('Provide a list of strings.');
  return source.map(before => ({ before, after: cleanText(before) }));
}
