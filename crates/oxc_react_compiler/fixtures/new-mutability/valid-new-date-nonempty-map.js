// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  return new Date(...new Map([[timestamp, timestamp]]));
}
