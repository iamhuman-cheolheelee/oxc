// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  args["2"] = timestamp;
  return new Date(...args);
}
