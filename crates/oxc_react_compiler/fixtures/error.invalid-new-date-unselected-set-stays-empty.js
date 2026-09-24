// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const a = new Set(); const b = new Set(); const target = cond ? a : b; target.add(0); return new Date(...a);
}
