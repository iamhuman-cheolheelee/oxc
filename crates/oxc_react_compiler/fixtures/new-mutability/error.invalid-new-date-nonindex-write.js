// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  args[4294967295] = timestamp;
  return new Date(...args);
}
