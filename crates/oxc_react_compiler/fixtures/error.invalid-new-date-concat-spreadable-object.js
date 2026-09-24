// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const item = { [Symbol.isConcatSpreadable]: true, length: 0 }; return new Date(...[].concat(item));
}
