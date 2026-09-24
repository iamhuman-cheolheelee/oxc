// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const args = new Set(); const proto = args.__proto__; proto.add = () => null; args.add(timestamp); return new Date(...args);
}
