// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const a = new Set(); const b = new Set(); const target = cond ? a : b; const result = cond ? target.add(0) : target.add(1); return new Date(...result);
}
