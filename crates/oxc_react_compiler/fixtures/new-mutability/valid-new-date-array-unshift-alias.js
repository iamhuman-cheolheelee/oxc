// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = []; const alias = args; alias.unshift(timestamp);
  return new Date(...args);
}
