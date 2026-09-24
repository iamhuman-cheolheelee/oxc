// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = [0, 1]; args.length = 0; return new Date(...new Array(...args));
}
