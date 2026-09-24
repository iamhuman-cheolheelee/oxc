// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const a = new Map(); const b = new Map(); const target = cond ? a : b; return new Date(...target.set(0, 0));
}
