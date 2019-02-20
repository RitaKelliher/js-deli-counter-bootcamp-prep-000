ticket = 1

function takeANumber(array, name) {
 array.push(name)
 var place = [array.indexOf(name) + 1]
return `Welcome, ${name}. You are number ${place} in line.`
}
function takeANumberAlt(array){
  array.push(++ticket)
  return `You are number ${ticket} .`
}

function resetCounter(){
   ticket = 0
}
function nowServing(array) {
  if(array.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + array.shift() + "."
  }
}

function currentLine(array) {
  if (array.length === 0) {
   return ("The line is currently empty.")
  } else {
    var x = "The line is currently: " 
   for (var i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
    x += [i + 1] + ". " + array[i] + ", "
    } else {
      x += [i + 1] + ". " + array[i] + ""
    }
     }
    return x
  }
}




