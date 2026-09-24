// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const args = [0].map(value => value); return new Date(...args);
}
