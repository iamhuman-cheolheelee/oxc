// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  args[0] = timestamp;
  args.length = 0;
  return new Date(...args);
}
