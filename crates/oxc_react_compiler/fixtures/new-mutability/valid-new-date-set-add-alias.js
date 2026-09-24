// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = new Set(); const alias = args; alias.add(timestamp); return new Date(...args);
}
