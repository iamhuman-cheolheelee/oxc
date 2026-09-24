// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const box = {value: {0: timestamp, length: true}};
  return new Date(...Array.from(box.value));
}
