const fs = require('fs').promises;

async function listFilesInCurrentDirectory() {
    try {
        const items = await fs.readdir('../');

        for (const item of items) {
          //  const fullPath = '../' + '/' + item;  // Simple path construction
            const stats = await fs.stat('../'+item);

            if (stats.isFile()) {
                console.log(`[FILE]  ${item}`);
            } else if (stats.isDirectory()) {
                console.log(`[DIR]   ${item}`);
            } else {
                console.log(`[OTHER] ${item}`);
            }
        }
    } catch (err) {
        console.error("Error:", err);
    }
}

listFilesInCurrentDirectory();
