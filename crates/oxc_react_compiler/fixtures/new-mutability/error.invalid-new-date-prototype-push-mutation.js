// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  args.__proto__.push = () => 0;
  args.push(timestamp);
  return new Date(...args);
}
