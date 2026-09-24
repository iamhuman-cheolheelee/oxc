// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const args = Array(); args.push(0); return new Date(...args);
}
