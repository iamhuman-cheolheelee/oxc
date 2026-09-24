// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  const other = [];
  const target = cond ? args : other;
  target.length = 1;
  return new Date(...args);
}
