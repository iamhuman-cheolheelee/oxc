// @validateNoImpureFunctionsInRender
function Component() {
  const args = [0].concat(); args[Symbol.iterator] = function* () {}; return new Date(...args);
}
