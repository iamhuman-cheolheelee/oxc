// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const source = {length: 1, [Symbol.iterator]: () => [][Symbol.iterator]()};
  return new Date(...Array.from(source));
}
