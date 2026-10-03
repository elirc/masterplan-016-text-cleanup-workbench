import test from 'node:test';
import assert from 'node:assert/strict';

import { cleanText, cleanList } from '../public/core.js';
test('trim and repeated whitespace follow the stated normalization', () => {
  assert.equal(cleanText('  hello\t \nworld  '), 'hello world');
});
test('empty and all-whitespace values remain valid records', () => {
  assert.equal(cleanText(''), ''); assert.equal(cleanText(' \t\n '), '');
});
test('Unicode and punctuation survive', () => {
  assert.equal(cleanText(' café   —   déjà vu! '), 'café — déjà vu!');
});
test('list transformation preserves source and count', () => {
  const source = Object.freeze([' A ', '', 'B  C']); const rows = cleanList(source);
  assert.deepEqual(source, [' A ', '', 'B  C']); assert.equal(rows.length, 3);
  assert.deepEqual(rows[0], { before: ' A ', after: 'A' });
});
test('a second pass is idempotent over representative fixtures', () => {
  for (const x of ['', '  a   b ', '\t', 'café — déjà vu!', '中  文']) assert.equal(cleanText(cleanText(x)), cleanText(x));
  assert.throws(() => cleanText(null), TypeError);
});
