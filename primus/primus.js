const Primus = require('primus');

let go = (server) =>{
    let primus = new Primus(server,{});
    primus.on('connection', (spark) =>{
        console.log('spark recieved')
    })
}

   
module.exports.go = go;