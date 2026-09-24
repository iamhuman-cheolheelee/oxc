// @validateNoImpureFunctionsInRender
function Component() {
  return new Date(...new Array(1).slice());
}
