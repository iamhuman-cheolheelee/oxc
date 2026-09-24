// @validateNoImpureFunctionsInRender
function Component() {
  const args = [0]; args.constructor = { [Symbol.species]: function() { return new Set(); } }; return new Date(...args.slice());
}
