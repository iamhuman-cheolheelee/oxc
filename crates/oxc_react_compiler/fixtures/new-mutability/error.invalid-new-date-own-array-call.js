// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const constructors = {Array: () => []}; return new Date(...constructors.Array(1));
}
