/* 
1. Get url from the user input.
2. Turn the user entered URL into a QR code image.
3. Create a txt file to save the user input.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            message: "Type in your URL: ",
            name: "URL"
        }
    ])
    .then((answer) => {
        const url = answer.URL;
        let qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));
        fs.writeFile("url.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
});