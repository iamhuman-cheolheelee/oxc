// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = new Array(); args.push(timestamp); return new Date(...args);
}
