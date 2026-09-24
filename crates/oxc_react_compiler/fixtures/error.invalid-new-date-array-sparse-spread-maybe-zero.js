// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const source = cond ? [,] : [0]; return new Date(...new Array(...source));
}
