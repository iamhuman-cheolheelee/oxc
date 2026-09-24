// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = new Set(); const ctor = args.constructor; ctor.prototype.add = () => null; args.add(timestamp); return new Date(...args);
}
