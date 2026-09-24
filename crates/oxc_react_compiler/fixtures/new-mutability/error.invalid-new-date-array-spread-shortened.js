// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = [0, 1]; args.length = 1; return new Date(...new Array(...args));
}
