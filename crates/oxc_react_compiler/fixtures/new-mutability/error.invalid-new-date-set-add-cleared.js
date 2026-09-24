// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = new Set(); args.add(timestamp); args.clear(); return new Date(...args);
}
