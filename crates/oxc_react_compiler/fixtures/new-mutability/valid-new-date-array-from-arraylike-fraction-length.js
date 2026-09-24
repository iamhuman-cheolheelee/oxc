// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  
  return new Date(...Array.from({0: timestamp, length: 1.9}));
}
