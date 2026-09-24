// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  return new Date(...new Set(...[], ...[[timestamp]]));
}
