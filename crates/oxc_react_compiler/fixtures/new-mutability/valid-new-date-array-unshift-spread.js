// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args.unshift(...[timestamp]);
  return new Date(...args);
}
