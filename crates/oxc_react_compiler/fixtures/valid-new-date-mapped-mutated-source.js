// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const source = [0, 1]; const args = source.map(value => { source.length = 0; return value; }); return new Date(...args);
}
