// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const values = [0, 1]; const args = [...values]; return new Date(...new Array(...args));
}
