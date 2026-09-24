// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const a = [timestamp];
  const it = {[Symbol.iterator]() { a.pop(); return [][Symbol.iterator](); }};
  const args = [...it, ...a];
  return new Date(...args);
}
