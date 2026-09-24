// @validateNoImpureFunctionsInRender
function Component({ cond, mutate }) {
  const args = []; mutate(args); args.length = 1; return new Date(...new Array(...args));
}
