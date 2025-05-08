const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

// Create readable stream from output.gz
const input = fs.createReadStream('output.tgz');

// Create gunzip transform stream
const gunzip = zlib.createGunzip();

// Create writable stream to decompressed.txt
const output = fs.createWriteStream('decompressed.txt');

// Connect the streams using pipeline with error handling
pipeline(
    input,
    gunzip,
    output,
    (err) => {
        if (err) {
            console.error('Decompression failed:', err.message);
        } else {
            console.log('Decompression succeeded: output.gz → decompressed.txt');
        }
    }
);
