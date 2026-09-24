// @validateNoImpureFunctionsInRender
function Component({ cond, mutate }) {
  const args = new Array(1); args[0] = 0; return new Date(...new Array(...args));
}
