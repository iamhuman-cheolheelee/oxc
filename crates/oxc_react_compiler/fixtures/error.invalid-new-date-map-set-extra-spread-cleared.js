// @validateNoImpureFunctionsInRender
function Component({ cond, mutate }) {
  const extra = [3]; const result = new Map().set(1, 2, ...extra); result.clear(); return new Date(...result);
}
