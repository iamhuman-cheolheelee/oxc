// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args.unshift = () => 0; args.unshift(timestamp);
  return new Date(...args);
}
