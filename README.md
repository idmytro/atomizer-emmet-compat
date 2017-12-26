# Atomizer Emmet Compat
## `Fx`, `Fxg`, `Fxs`, `Fxb`, `Fxd`, `Fxf`, `Fxw`

Let's use custom rules, untill https://github.com/acss-io/atomizer/issues/308

## How to use

Install from npm

```
npm install atomizer-emmet-compat --save-dev
```

Modify your atomizer rules

```js
// import
var compat = require('atomizer-emmet-compat');

// define your custom rules
var rules = [];

// merge arrays and export
module.exports = rules.concat(compat);
```

## Links

[Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

[Atomizer Reference](https://acss.io/reference/)

