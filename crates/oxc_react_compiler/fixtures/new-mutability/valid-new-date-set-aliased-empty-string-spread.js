// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const empty = "";
  return new Date(...new Set(...empty, [timestamp]));
}
