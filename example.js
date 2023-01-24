import fixmyjs from './lib/index.js';

const src = `
var s="abc"
while (s == NaN) alert()
const s2 = { abc: "abc" };
delete s2.abc;
delete s;
console.log(parseInt(s2));
`;
const opt = {
  curly: true, // add blackets
  quotmark: "double", // use double quote
};
const fixed = fixmyjs.fix(src, opt);
console.log(fixed);
