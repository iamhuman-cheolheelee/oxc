// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const a = []; const b = []; a.unshift = () => {}; const target = cond ? a : b; delete target["unshift"]; a.unshift(0); return new Date(...a);
}
