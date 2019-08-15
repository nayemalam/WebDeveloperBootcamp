function average(numbers) {
    var total = 0, avg =0;
    for(var i=0; i<numbers.length; i++) {
        total += numbers[i];
        avg = total/numbers.length;
        avg = Math.round(avg);
    }
    console.log(avg);
}

scores = [90, 98, 89, 100,100,86,94];
average(scores);


scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);