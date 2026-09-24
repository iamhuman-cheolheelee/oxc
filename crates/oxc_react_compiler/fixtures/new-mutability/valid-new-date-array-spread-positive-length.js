// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args.length = 2; return new Date(...new Array(...args));
}
