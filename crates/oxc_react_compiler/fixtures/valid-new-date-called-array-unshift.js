// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const create = Array; const args = create(); args.unshift(0); return new Date(...args);
}
