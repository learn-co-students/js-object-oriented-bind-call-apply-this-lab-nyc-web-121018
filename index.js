//Your code here

function justInvoke(callback){
  return callback()
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  const newFn = functionToBeCopied.bind(thisValue)
  return newFn
}
