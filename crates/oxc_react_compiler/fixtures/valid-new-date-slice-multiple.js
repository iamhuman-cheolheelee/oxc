// @validateNoImpureFunctionsInRender
function Component() {
  return new Date(...new Array(...[0, 1].slice()));
}
