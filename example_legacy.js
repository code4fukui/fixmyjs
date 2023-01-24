import fixmyjs from "https://code4fukui.github.io/fixmyjs/lib/index.js";
import jshint from "https://code4fukui.github.io/jshint/jshint.js";

const src = `
const s ="abc"
`;

const options = {};
jshint(src, options)
const fixed = fixmyjs(jshint.data(), src, options).run();
console.log(fixed);
