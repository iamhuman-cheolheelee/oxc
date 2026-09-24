// @validateNoImpureFunctionsInRender
function Component() {
  const map = new Map(); map.set = () => new Map(); return new Date(...map.set(0, 0));
}
