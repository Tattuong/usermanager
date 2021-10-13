const http = require('http');
const fs = require('fs');



const server = http.createServer (function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('not found');
        } else {
            res.write(data);
        }
        res.end();
    });
});



const port = 3000
server.listen(port, function(error){
    if(error){
        console.log('connected wrong', error);
    }
    else{
    console.log('server is listening on port', port);
    }
})

// const http = require('http')
// const hostname = '127.0.0.1'
// const port = 3000
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     fs.readFile('./index.html', null, function (error, data) {
//         if (error) {
//             res.writeHead(404);
//             res.write('not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// });
// server.listen(port, hostname, () => {
// console.log(`Server running at http://${hostname}:${port}/`)
// })