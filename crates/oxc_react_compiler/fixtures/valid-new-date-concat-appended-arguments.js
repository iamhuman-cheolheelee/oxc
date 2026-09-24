// @validateNoImpureFunctionsInRender
function Component() {
  const args = [2000].concat([0], 1); return new Date(...args);
}
