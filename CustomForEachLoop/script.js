// func is just a parameter
// all we need to do to call "func" is add "()"
function myForEach(arr, func) {
    console.log("Calling the function itself:");
    for(var i=0; i<arr.length; i++) {
       func(arr[i]);
   }
}

var nums = [1,2,3];
myForEach(nums, function(number) {
    console.log(number);
})

// notice how we initialize this with a function!!
Array.prototype.myForEach = function(myFunc) {
    // 'this' is the current element within the function
    console.log("Using the prototype object:");
    for(var i=0; i<this.length; i++) {
        myFunc(this[i]);
    }
}

nums.myForEach(function(number) {
    console.log(number);
})