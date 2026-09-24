// @validateNoImpureFunctionsInRender
function Component() {
  return new Date(...[].slice());
}
