//require run length encoding
let Runlengthencoding = require('run-length-encoder-decoder');
// require readline and declare the variables
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
//show and accept input
  readline.question('Input syntax : ', syntax => {
//Runlengthencoding step to decoding
Runlengthencoding.encoder(syntax, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Encode: ' + result);
        Runlengthencoding.decoder(result, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Decode: ' + result);
            }
        });
    }
});
readline.close();
});
