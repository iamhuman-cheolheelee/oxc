// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args.constructor.prototype.push = () => 0; args.push(timestamp); return new Date(...args);
}
