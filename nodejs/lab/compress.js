const fs = require('fs');
const zlib = require('zlib');
const {pipeline} = require('stream');

const input = fs.createReadStream('../input.txt');
const output = fs.createWriteStream('output.tgz');
const gzip = zlib.createGzip();

pipeline(
    input,
    gzip,
    output,
    (err) => {
        if(err){
            console.log("Error",err);
        }
        else{
            console.log("pipeline succeed. input.txt was compressed to output.tgz")
        }
    }
);