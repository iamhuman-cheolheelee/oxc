// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const array = Array.of(timestamp); array.length = 0;
  return new Date(...array);
}
