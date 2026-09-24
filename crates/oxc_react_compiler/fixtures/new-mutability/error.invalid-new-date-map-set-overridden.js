// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = new Map(); args.set = () => null; args.set(timestamp, 0); return new Date(...args);
}
