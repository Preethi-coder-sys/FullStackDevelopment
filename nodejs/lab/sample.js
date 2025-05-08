const fs = require('fs').promises;

async function listFilesInCurrentDirectory() {
    try {
        const items = await fs.readdir('../');
        for (const item of items) {
            const stats = await fs.stat('../'+item);
            if (stats.isFile()) {
                console.log('[FILE]', item);
            } else if(stats.isDirectory()) {
                console.log("[Dir]",item);
            }
            else{
                console.log("[Others]",item);
            }
        } 

    } catch (error) {
        console.error("Error",error);
    }
}

listFilesInCurrentDirectory();