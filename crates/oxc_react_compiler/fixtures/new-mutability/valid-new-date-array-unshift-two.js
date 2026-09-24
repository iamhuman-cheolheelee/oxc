// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args.unshift(0, timestamp);
  return new Date(...new Array(...args));
}
