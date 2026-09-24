// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const a = [timestamp];
  const it = {[Symbol.iterator]() { a.pop(); return [][Symbol.iterator](); }};
  const args = [...a, ...it];
  return new Date(...args);
}
