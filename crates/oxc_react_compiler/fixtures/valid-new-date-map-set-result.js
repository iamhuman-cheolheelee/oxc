// @validateNoImpureFunctionsInRender
function Component() {
  const map = new Map(); const args = map.set(0, 0); return new Date(...args);
}
