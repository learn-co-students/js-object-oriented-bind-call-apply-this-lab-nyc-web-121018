//
// Global Functions

// calls and returns the function as a callback, shows this is global from the callback
function justInvoke(func){
    return func();
}

// calls and returns the function as a callback, assigns this to be bob while passing all args to invoked function
function setThisWithCall(func, thisValue, argument){
  return func.call(thisValue, argument)
  return
}

// calls and returns function as a callback, assigns this to be bob, sets array as arguments
function setThisWithApply(func, thisValue, ourArguments){
  return func.apply(thisValue, ourArguments)

}

// returns new function
// sets argument to fred
function returnNewFunctionOf (functionToBeCopied, thisValue){
  const copy = functionToBeCopied.bind(thisValue)
  return copy
}
