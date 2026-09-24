// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const args = Array(1).map(value => value); return new Date(...args);
}
