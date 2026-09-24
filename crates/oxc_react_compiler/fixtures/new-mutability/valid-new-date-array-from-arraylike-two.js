// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  
  return new Date(...new Array(...Array.from({length: 2})));
}
