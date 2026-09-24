// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const source = {length: 1}; source.length = 0;
  return new Date(...Array.from(source));
}
