// @validateNoImpureFunctionsInRender
function Component() {
  const args = [0]; args.slice = () => []; return new Date(...args.slice());
}
