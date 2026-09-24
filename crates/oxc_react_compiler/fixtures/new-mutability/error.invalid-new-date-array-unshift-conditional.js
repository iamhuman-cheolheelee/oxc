// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; if (timestamp) args.unshift(timestamp);
  return new Date(...args);
}
