const WebSocket = require('ws');

const WebSocketServer = WebSocket.Server;
//服务器
const wss = new WebSocketServer({
    port: 3000
});

wss.on('connection', function (ws) {
    console.log(`[服务器] 连接`);
    ws.on('message', function (message) {
        console.log(`[服务器] 收到的消息: ${message}`);
        setTimeout(() => {
            ws.send(`我是服务器，你呢？`, (err) => {
                if (err) {
                    console.log(`[服务器]: ${err}`);
                }
            });
        }, 1000);
    })
});

console.log('ws server started at port 3000...');
 
// 客户端 test:

let count = 0;

let ws = new WebSocket('ws://localhost:3000/ws/chat');

ws.on('open', function () {
    console.log(`[客户端] 打开`);
    ws.send('用户上线了');
});

ws.on('message', function (message) {
    console.log(`[客户端] 收到的消息: ${message}`);
    count++;
    if (count > 5) {
        ws.send('用户下线了!');
        ws.close();
    } else {
        setTimeout(() => {
            ws.send(`Hello, 我是用户.${count}!`);
        }, 1000);
    }
});