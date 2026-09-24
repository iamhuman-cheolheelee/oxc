// @validateNoImpureFunctionsInRender
function Component({ cond, mutate }) {
  const args = new Array(1); args.length = 0; return new Date(...new Array(...args));
}
