// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args.unshift = () => 0; delete args.unshift; args.unshift(timestamp);
  return new Date(...args);
}
