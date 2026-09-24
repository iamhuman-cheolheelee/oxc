// @validateNoImpureFunctionsInRender
function Component({ cond, mutate }) {
  const args = cond ? [] : [0]; args.length = 1; return new Date(...new Array(...args));
}
