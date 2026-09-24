// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const input = new Set([timestamp]);
  return new Date(...new Set(input));
}
