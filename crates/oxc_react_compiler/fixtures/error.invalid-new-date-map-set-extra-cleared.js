// @validateNoImpureFunctionsInRender
function Component({ cond, mutate }) {
  const result = new Map().set(1, 2, 3); result.clear(); return new Date(...result);
}
