// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = new Set(); args.add(); return new Date(...args);
}
