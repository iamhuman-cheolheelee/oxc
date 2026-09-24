// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; args[1] = 0; return new Date(...new Array(...args));
}
