// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const a = []; const b = []; a.push = () => {}; const target = cond ? a : b; delete target.push; a.push(0); return new Date(...a);
}
