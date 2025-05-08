// //callback

const { error } = require('console');

// const fs = require('fs')

// fs.readdir('./',(err,files) => {
//     if(err){
//         console.log("Error log.",err);
//     }
//     else{
//         console.log("File-",files);
//     }
// })

//promise
// const fs = require('fs').promises

// fs.readdir('../')
// .then((files)=> {
//     files.forEach(file=> {
//         console.log("files",file);
//     });
// })
// .catch((error)=>{
//     console.log("error",error);
// });

//async await
const fs = require('fs').promises
async function readDirFile(){
    try {
        //const files = await fs.readdir('../')
        const result = await fs.stat('./')
        if (result.isFile()) {
            console.log("files");
        } else if(result.isDirectory()) {
            console.log("Dict");
        }
        
    } 
    catch (error) {
        console.log("Error",error);
    }
};

readDirFile();
