// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args.push(0); args.push(1); return new Date(...new Array(...args));
}
