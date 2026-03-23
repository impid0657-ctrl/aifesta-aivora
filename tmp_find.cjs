const fs = require('fs');
const c = fs.readFileSync('components/footer/Footer.tsx', 'utf8');
const lines = c.split('\n');
lines.forEach((l, i) => {
  if (l.includes('url') && l.includes('href')) console.log((i+1) + ': ' + l.trim());
  if (l.includes('target') && l.includes('blank')) console.log((i+1) + ': ' + l.trim());
  if (l.includes('.url')) console.log((i+1) + ': ' + l.trim());
});
