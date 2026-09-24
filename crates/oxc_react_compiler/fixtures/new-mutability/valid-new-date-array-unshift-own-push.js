// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args.push = () => 0; args.unshift(timestamp);
  return new Date(...args);
}
