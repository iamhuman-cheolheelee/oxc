// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = new Set(); args.add = () => null; args.add(timestamp); return new Date(...args);
}
