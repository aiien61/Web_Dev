const fs = require("fs");

fs.writeFile("note.txt", "Hello from NodeJS", function(error){
    if (error) throw error;
    console.log("This file has been saved!");
});

fs.readFile("note.txt", "utf8", function(error, data){
    if (error) throw error;
    console.log(data);
});