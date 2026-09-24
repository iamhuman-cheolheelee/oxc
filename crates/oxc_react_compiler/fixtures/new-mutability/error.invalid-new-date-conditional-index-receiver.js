// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  const other = [];
  const target = cond ? args : other;
  target[0] = timestamp;
  return new Date(...args);
}
