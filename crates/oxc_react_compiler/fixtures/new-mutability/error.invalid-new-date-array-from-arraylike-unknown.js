// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  
  return new Date(...Array.from({length: timestamp}));
}
