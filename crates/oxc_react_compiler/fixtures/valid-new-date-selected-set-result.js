// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const a = new Set(); const b = new Set(); const target = cond ? a : b; return new Date(...target.add(0));
}
