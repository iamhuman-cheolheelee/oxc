// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const source = [,]; source.constructor = { [Symbol.species]: function () { return []; } }; const args = source.map(value => value); return new Date(...args);
}
