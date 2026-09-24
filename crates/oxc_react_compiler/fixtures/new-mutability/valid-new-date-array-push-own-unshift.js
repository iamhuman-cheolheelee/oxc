// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args.unshift = () => 0; args.push(timestamp);
  return new Date(...args);
}
