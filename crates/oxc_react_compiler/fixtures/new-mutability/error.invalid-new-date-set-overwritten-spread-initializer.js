// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const options = [[timestamp]]; options[0] = []; return new Date(...new Set(...options));
}
