const server = require('laravel-echo-server');
server.run({
    devMode:true,
    authHost:'http://codeeditor-websocket.test'
});