// @validateNoImpureFunctionsInRender
function Component() {
  const source = [0]; source.concat = () => []; const args = source.concat(); return new Date(...args);
}
