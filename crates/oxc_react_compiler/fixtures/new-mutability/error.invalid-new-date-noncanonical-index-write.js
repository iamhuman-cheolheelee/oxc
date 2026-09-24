// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  args["01"] = timestamp;
  return new Date(...args);
}
