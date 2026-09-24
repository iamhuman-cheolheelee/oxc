// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  delete args[0];
  return new Date(...args);
}
