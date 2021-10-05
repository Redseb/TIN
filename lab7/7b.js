const fs = require('fs');

if(process.argv.length < 3){
    console.error("Please specify a directory as an argument");
    process.exit(1);
}

const DIRECTORY = process.argv[2];

if(!fs.existsSync(DIRECTORY)){
    console.error(`${DIRECTORY} could not be found or does not exist`);
    process.exit(1);
}

const isDirectory = fs.statSync(DIRECTORY).isDirectory();

if(!isDirectory){
    console.error(`${DIRECTORY} is not a directory`);
    process.exit(1);
}

fs.readdir(DIRECTORY, (err, files)=>{
    if(err){
        throw err;
    }

    files.forEach(file=> {
        fs.watch(`${DIRECTORY}\\${file}`, {
            bigint: false,
            persistent: true,
            interval: 4000
        }, ()=>{
            console.log("Current content: ", fs.readFileSync(`${DIRECTORY}\\${file}`, "utf8"));
        })
    })
});