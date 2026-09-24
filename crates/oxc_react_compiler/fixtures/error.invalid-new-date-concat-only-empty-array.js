// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  return new Date(...[].concat([]));
}
