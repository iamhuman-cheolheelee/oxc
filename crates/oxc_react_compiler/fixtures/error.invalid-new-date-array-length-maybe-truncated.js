// @validateNoImpureFunctionsInRender
function Component({ cond, mutate }) {
  const args = [0]; if (cond) args.length = 0; args.length = 1; return new Date(...new Array(...args));
}
