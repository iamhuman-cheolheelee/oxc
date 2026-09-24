// @validateNoImpureFunctionsInRender
function Component() {
  const args = [0].slice(); args.length = 0; return new Date(...args);
}
