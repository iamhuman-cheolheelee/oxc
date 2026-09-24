// @validateNoImpureFunctionsInRender
function Component() {
  return new Date(...new Map().set(0, 0));
}
