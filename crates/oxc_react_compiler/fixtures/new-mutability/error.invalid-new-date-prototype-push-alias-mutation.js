// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp, cond}) {
  const args = [];
  const proto = args["__proto__"];
  proto.push = () => 0;
  const other = [];
  other.push(timestamp);
  return new Date(...other);
}
