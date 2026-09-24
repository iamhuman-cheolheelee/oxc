// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const source = [,]; source[0] = 0; return new Date(...new Array(...source));
}
