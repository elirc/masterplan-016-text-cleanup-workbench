import { cleanList, cleanText } from './core.js';
document.querySelector('#clean').onclick = () => {
  const rows = cleanList(document.querySelector('#source').value.split('\n'));
  document.querySelector('#result').textContent = rows.map((row, i) => `${i + 1}. ${JSON.stringify(row.before)} → ${JSON.stringify(row.after)}\nSecond pass unchanged: ${cleanText(row.after) === row.after}`).join('\n');
};
