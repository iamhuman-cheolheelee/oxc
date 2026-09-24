// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const source = cond ? [,] : [1]; return new Date(...new Array(...source));
}
