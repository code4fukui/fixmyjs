# fixmyjs

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Automatically fixes your JavaScript based on linting rules, in a non-destructive way.

## Demo

Try it out live at [fixmyjs.com](http://fixmyjs.com).

## Features

`fixmyjs` can automatically fix a wide range of common issues found by linters.

**Style & Consistency**
- Adds missing curly braces to `if`, `for`, and `while` statements.
- Converts bracket notation to dot notation where possible (e.g., `obj["prop"]` → `obj.prop`).
- Enforces consistent casing: `snake_case` to `camelCase` or vice-versa.
- Converts `new Array()` to `[]` and `new Object()` to `{}`.
- Adds missing parentheses to constructors (e.g., `new Person` → `new Person()`).
- Splits single `var` statements with multiple declarations into separate statements.

**Error Prevention & Best Practices**
- Replaces `==` and `!=` with strict equality operators `===` and `!==`.
- Rewrites `NaN` comparisons (e.g., `x == NaN`) to use the `isNaN()` function.
- Adds the `radix` parameter to `parseInt()` calls.
- Prevents side-effects from `new` by converting `new MyObject();` to `MyObject();` when the result is unused.
- Replaces unsafe `delete` on variables with assignment to `undefined`.
- Fixes invalid constructor calls like `new String()` to be `String()`.
- Removes `debugger` statements.
- Disallows `++` and `--` in favor of `+= 1` and `-= 1`.

## Installation

To use the command-line tool, install it globally:
```sh
npm install -g fixmyjs
```

## Usage

### Command Line

Fix one or more files (or directories) in place:
```sh
fixmyjs your_file.js path/to/directory/
```

Perform a dry run to see a diff of the proposed changes without modifying files:
```sh
fixmyjs --dry-run your_file.js
```

**Common Options:**
- `--dry-run`, `-r`: Show a diff of changes without writing to files.
- `--legacy`, `-l`: Use the legacy JSHint-based fixer instead of the default AST-based one.
- `--config`, `-c`: Path to a custom `.jshintrc` configuration file.
- `--patch`, `-p`: Output a patch file to stdout.

`fixmyjs` automatically discovers and uses `.jshintrc` and `.jshintignore` files.

### Programmatic API

```js
import fixmyjs from "https://code4fukui.github.io/fixmyjs/lib/index.js";

// Source code with some common issues
const src = `
var s='abc'
if (s == NaN) alert()
var obj = new Object();
delete s;
`;

// Configuration options
const options = {
  curly: true,      // Add curly braces to if/while/for
  quotmark: "double" // Enforce double quotes
};

const fixed = fixmyjs.fix(src, options);

console.log(fixed);
/*
Output:
var s = "abc";
if (isNaN(s)) {
  alert();
}
var obj = {};
s = undefined;
*/
```

## Integrations

- [Atom plugin](https://github.com/sindresorhus/atom-fixmyjs)
- [Brackets plugin](https://github.com/fyockm/brackets-fixmyjs)
- [Gulp plugin](https://github.com/kirjs/gulp-fixmyjs)
- [Grunt plugin](https://github.com/jonschlinkert/grunt-fixmyjs)
- [Sublime plugin](https://github.com/addyosmani/sublime-fixmyjs)

## License

MIT License — see [LICENSE](LICENSE).