function beer () {
    let numberOfBottles = 99;
    let bottleWord = "bottles";
    while (numberOfBottles > 0) {
        process.stdout.write(`${numberOfBottles} ${bottleWord} of beer on the wall. `);
        process.stdout.write(`${numberOfBottles} ${bottleWord} of beer. `);
        process.stdout.write("Take 1 down, pass it around. ");
        
        numberOfBottles--;
        if (numberOfBottles === 1) {
            bottleWord = "bottle";
        }else if (numberOfBottles === 0) {
            break;
        }
        console.log(`${numberOfBottles} ${bottleWord} of beer on the wall`);
    }

    console.log("No more bottles of beer on the wall.")
}

beer();