// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const options = [[timestamp]]; const alias = options; return new Date(...new Set(...alias));
}
