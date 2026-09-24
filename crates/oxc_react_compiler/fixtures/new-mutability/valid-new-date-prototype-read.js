// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  const proto = args.__proto__;
  args.push(timestamp);
  return [proto, new Date(...args)];
}
