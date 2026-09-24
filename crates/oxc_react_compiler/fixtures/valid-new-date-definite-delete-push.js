// @validateNoImpureFunctionsInRender
function Component({ cond }) {
  const a = []; a.push = () => {}; delete a.push; a.push(0); return new Date(...a);
}
