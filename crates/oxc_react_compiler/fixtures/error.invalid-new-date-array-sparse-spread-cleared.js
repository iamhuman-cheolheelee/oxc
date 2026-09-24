// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const source = [,]; source.length = 0; return new Date(...new Array(...source));
}
