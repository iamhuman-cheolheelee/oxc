// @validateNoImpureFunctionsInRender
function Component() {
  const map = new Map(); const args = map.set(0, 0); map.clear(); return new Date(...args);
}
