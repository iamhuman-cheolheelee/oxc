// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const a = [timestamp];
  const it = {[Symbol.iterator]() { a.pop(); return [][Symbol.iterator](); }};
  a.push(...it);
  return new Date(...a);
}
