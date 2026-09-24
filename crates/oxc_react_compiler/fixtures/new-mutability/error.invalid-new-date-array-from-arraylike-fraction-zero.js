// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  
  return new Date(...Array.from({length: 0.9}));
}
