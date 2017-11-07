# Atomizer Emmet Compat

Let's use custom rules, untill https://github.com/acss-io/atomizer/issues/308

## How to use

Add dependency in your `package.json`

```json
    "atomizer-emmet-compat":"https://github.com/idmytro/atomizer-emmet-compat.git"
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

