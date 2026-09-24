// @validateNoImpureFunctionsInRender
function Component({ cond, mutate }) {
  return new Date(...[].concat(...new Array(1)));
}
