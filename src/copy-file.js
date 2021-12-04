// new promise to apply CSS style sheet to HTML page
const fs = require('fs');

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style/style.css', err => {
            if (err) {
                reject(err);
                console.log(err);
                return;
            }
            resolve
            console.log('CSS Styling Applied!')
        })
    })
}

module.exports = copyFile;