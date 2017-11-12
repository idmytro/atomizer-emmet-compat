module.exports = [
  {
    type: "pattern",
    id: "flex-emmet",
    name: "Flex",
    matcher: "Fx",
    allowParamToValue: false,
    styles: {
      "flex": "$0"
    },
    arguments: [{
      "a": "auto",
      "n": "none"
    }]
  },
  {
    type: "pattern",
    id: "flex-grow-emmet",
    name: "Flex Grow",
    matcher: "Fxg",
    allowParamToValue: true,
    styles: {
      "flex-grow": "$0",
    }
  },
  {
    type: "pattern",
    id: "flex-shrink-emmet",
    name: "Flex shrink",
    matcher: "Fxs",
    allowParamToValue: true,
    styles: {
      "flex-shrink": "$0"
    }
  },
  {
    type: "pattern",
    id: "flex-basis-emmet",
    name: "Flex basis",
    matcher: "Fxb",
    allowParamToValue: true,
    styles: {
      "flex-basis": "$0"
    },
    arguments: [{
      "a": "auto",
      "n": "none"
    }]
  },
  {
    type: "pattern",
    id: "flex-direction-emmet",
    name: "Flex direction",
    matcher: "Fxd",
    allowParamToValue: false,
    styles: {
      "flex-direction": "$0"
    },
    arguments: [{
      "r": "row",
      "rr": "row-reverse",
      "c": "column",
      "cr": "column-reverse"
    }]
  },
  {
    type: "pattern",
    id: "flex-flow-emmet",
    name: "Flex flow",
    matcher: "Fxf",
    allowParamToValue: false,
    styles: {
      "flex-flow": "$0"
    },
    arguments: [{
      "r": "row",
      "rr": "row-reverse",
      "c": "column",
      "cr": "column-reverse",
      "nw": "nowrap",
      "w": "wrap",
      "wr": "wrap-reverse"
    }]
  },
];
