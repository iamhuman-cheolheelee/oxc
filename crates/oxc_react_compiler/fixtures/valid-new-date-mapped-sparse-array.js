// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const args = [,].map(value => value); return new Date(...args);
}
