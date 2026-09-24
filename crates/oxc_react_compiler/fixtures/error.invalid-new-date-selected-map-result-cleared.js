// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const a = new Map(); const b = new Map(); const target = cond ? a : b; const result = target.set(0, 0); target.clear(); return new Date(...result);
}
