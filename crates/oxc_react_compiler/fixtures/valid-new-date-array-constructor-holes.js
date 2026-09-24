// @validateNoImpureFunctionsInRender
function Component({ cond, mutate }) {
  return new Date(...new Array(...new Array(1)));
}
