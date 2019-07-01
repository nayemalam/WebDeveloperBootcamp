console.log("open console success");

// PrintReverse
function printReverse(array) {
    for(var i=array.length-1; i>=0; i--) {
        console.log(array[i]);
    }
}

// isUniform
function isUniform(array) {
    for(var i=0; i<array.length-1; i++) {
        if(array[0] != array[i]) {
            return false;
        }
    }
    return true;
}

// SumArray
function sumArray(array) {
    var total = 0;
    for(var i=0; i<array.length-1; i++) {
        total += array[i];
    }
    return total;
}

// maxArray
function maxArray(array) {
    return Math.max(...array);
}