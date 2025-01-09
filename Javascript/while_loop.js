function beer() {
    var numberOfBottles = 99;
    var count = 0;
    
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle"
    }

    while (numberOfBottles > 0) {
        process.stdout.write(numberOfBottles + " " + bottleWord + " of beer on the wall, ");
        process.stdout.write(numberOfBottles + " " + bottleWord + " of beer. Take 1 down, pass it around, ");
        
        numberOfBottles --;
        count ++;
        if (numberOfBottles === 1) {
            bottleWord = "bottle"
        }

        if (numberOfBottles === 0) {
            console.log("no more " + bottleWord + " of beer on the wall.");
        }else {
            console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
        }

    }

    if (count > 1) {
        bottleWord = "bottles";
    }else {
        bottleWord = "bottle";
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + count + " " + bottleWord + " of beer on the wall.")
}

beer();