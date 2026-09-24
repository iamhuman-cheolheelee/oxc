// @validateNoImpureFunctionsInRender @enableNewMutationAliasingModel

function Component({timestamp}) {
  const Set = function Set() { return new globalThis.Set();
  };
  return new Date(...new Set([timestamp]));
}
