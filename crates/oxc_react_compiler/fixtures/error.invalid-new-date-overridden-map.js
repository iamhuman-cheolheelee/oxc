// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const source = [0]; source.map = () => []; const args = source.map(value => value); return new Date(...args);
}
