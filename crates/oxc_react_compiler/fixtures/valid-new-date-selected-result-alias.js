// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const a = new Set(); const b = new Set(); const target = cond ? a : b; const result = target.add(0); const alias = result; return new Date(...alias);
}
