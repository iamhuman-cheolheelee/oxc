// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args.constructor = {prototype: {}}; args.constructor.prototype.foo = 1; args.push(timestamp); return new Date(...args);
}
