// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = new Set([timestamp]);
  args.clear();
  return new Date(...args);
}
