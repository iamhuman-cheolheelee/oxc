// @validateNoImpureFunctionsInRender
function Component({ cond, mutate }) {
  return new Date(...Array(...Array(1)));
}
