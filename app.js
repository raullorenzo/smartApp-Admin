/**
 * Created by raul on 5/12/16.
 */
// process.env.TZ = 'UTC+2';
var chariot         = 'ws://192.168.0.195:1337';
var round = 1;

const MIRE          = 'Mire\'s bedroom';
const RAUL          = 'Raul\'s bedroom';
const DADS          = 'Dad\'s bedroom';
const KITCHEN       = 'Kitchen';
const CHARIOT       = 'coap://chariot.';
const SOURCE        = 'c352';
const DEST          = '.local/';
const SENSOR        = 'sensors/tmp275-c?get';
const MAX_SENS      = 4;

var app             = require("express")();
var express         = require("express"),// Express: Framework HTTP para Node.js
    http            = require("http").Server(app);
var io              = require("socket.io")(http);
var WebSocketClient = require('websocket').client;
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');  // Mongoose: Libreria para conectar con MongoDB
    logger          = require('morgan');
    path            = require('path');
    favicon         = require('serve-favicon');
    crypto          = require('crypto');
    formidable      = require('formidable'),
    cookieParser    = require('cookie-parser');
    passport        = require('passport'); // Passport: Middleware de Node que facilita la autenticación de usuarios
    cors            = require('cors');
    serialport      = require('serialport');
var sleep           = require('sleep');
var moment          = require('moment-timezone');
var events          = require('events');
// var Temp            = require('./models/temp.js');
// var io              = require('socket.io').listen(server);

moment().tz("Europe/Madrid").format();

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

require('mongoose-middleware').initialize(mongoose);

mongoose.Promise = global.Promise;
// Conexión a la base de datos de MongoDB que tenemos en local
mongoose.connect('mongodb://localhost/sensors', function(err, res) {
  if(err) throw err;
  console.log('Conectado correctamente a la Base de Datos, sensors');
  console.log("--------------------------------------------------------------");
  console.log("");
});

// Iniciamos la aplicación Express
// var app = express();
var server = require('http').Server(app);

/** WebSocket Client **/
function start(){
    var client = new WebSocketClient();
    // var promise = new (events.EventEmitter);

    client.connect(chariot);
     
    client.on('connectFailed', function(error) {
        console.log('');
        console.log('______________________________________________________________');
        console.log('');
        console.log('Connect Error: ' + error.toString());
        console.log('');
        console.log('______________________________________________________________');
        console.log('');
        console.log('Trying to reconnect WebSocket Client...');
        console.log('');
        console.log('______________________________________________________________');
        console.log('');
        sleep.sleep(5);
        start();
    });
    client.on('connect', function(connection) {
        console.log('______________________________________________________________');
        console.log('');
        console.log('WebSocket Client Connected');
        console.log('');
        console.log('______________________________________________________________');
        function sendTemp(l) {
            var loc = l;
            if (connection.connected) {
                var msg = CHARIOT+SOURCE+loc+DEST+SENSOR;
                console.log('');
                console.log('**************************************************************');
                console.log('');
                console.log('msg:',msg);
                console.log('');
                console.log('**************************************************************');
                console.log('');
                connection.sendUTF(msg);
            }
        }
        function clWS(){
            console.log('');
            console.log('--------------------------------------------------------------');
            console.log('');
            console.log('Closing WebSocketClient...');
            console.log('');
            console.log('--------------------------------------------------------------');
            console.log('');
            connection.close();
        }
        var inc = 6;
        for (i=0; i<MAX_SENS; i++){
            sleep.sleep(1);
            sendTemp(inc);
            inc++;
        }
        connection.on('error', function(error) {
            console.log("Connection Error: " + error.toString());
        });
        connection.on('close', function() {
            console.log('');
            console.log('______________________________________________________________');
            console.log('');
            console.log('WebSocket Client Closed');
            console.log('');
            console.log('______________________________________________________________');
            console.log('');
        });
        connection.on('message', function(message) {
            // promise.emit('success', message);
            // console.log('');
            // console.log('==============================================================');
            // console.log('promise:',promise);
            // console.log('==============================================================');
            // console.log('');
            console.log('');
            console.log('==============================================================');
            console.log('round#:',round);
            console.log('==============================================================');
            console.log('');
            if (message.type === 'utf8') {
                console.log('');
                console.log("Received:",message.utf8Data);
                var aux = message.utf8Data;
                console.log('length:',aux.length);
                if (aux.length<15){
                    console.log('aux:',aux);
                }else{
                    var location = message.utf8Data.substring(0,13);
                    var result = message.utf8Data.substring(35,39);
                    if (result == '    '){
                        result = 'NOT FOUND';
                        location = 'NOT FOUND';
                        // AddTemp(location, result);
                        console.log('');
                        console.log('/////////////////////////////////////////////////////////////');
                        console.log('');
                        console.log('result:',result);
                        console.log('');
                        console.log('/////////////////////////////////////////////////////////////');
                        console.log('');
                    }
                    else if (location == 'chariot.c3526'){
                        AddTemp(location, result);
                        console.log('location1:',location);
                    }
                    else if (location == 'chariot.c3527'){
                        AddTemp(location, result);
                        console.log('location2:',location);
                    }
                    else if (location == 'chariot.c3528'){
                        AddTemp(location, result);
                        console.log('location3:',location);
                    }
                    else if (location == 'chariot.c3529'){
                        AddTemp(location, result);
                        console.log('location4:',location);
                        connection.close();
                        //clWS();
                    }
                }
            }
            round++;
        });
    });
}
start();
setInterval(start, 150000);
//setTimeout(start, 10000);

/** End WebSocket Client **/

/** SerialPort **/

// var serialport = require('serialport');
// var portName = '/dev/cu.wchusbserialfd120';
// //var portName = '/dev/cu.usbmodemFA141';
// var myPort = new serialport(portName, {
//     baudRate: 9600,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false,
//     parser: serialport.parsers.readline("\r\n")
// });

// myPort.on('open', showPortOpen);
// myPort.on('data', sendSerialData);
// myPort.on('close', showPortClose);
// myPort.on('error', showError);

// function showPortOpen() {
//   console.log("------------------------------------------------------------------------");
//   console.log('puerto abierto: '+portName+'; Data rate: ' + myPort.options.baudRate);
//   console.log("------------------------------------------------------------------------");
// }
 
// function sendSerialData(data) {
//   io.emit("lectura", {
//     valor: data
//   });
//   console.log(data);

//   // myPort.write("4\r");
//   // readData = data.toString();
//   // if(readData.indexOf('5') == -1){
//   //  io.emit('some',{
//   //    data:readData
//   //  });
//   // }
// }

 
// function showPortClose() {
//   console.log("");
//   console.log("------------------------------------------------------------------------");
//   console.log('port closed.');
//   console.log("------------------------------------------------------------------------");
//   console.log("");

// }
 
// function showError(error) {
//   console.log("");
//   console.log("------------------------------------------------------------------------");
//   console.log('Serial port error: ' + error);
//   console.log("------------------------------------------------------------------------");
//   console.log("");

// }

// io.on('connection', function(socket){
//   console.log("");
//   console.log("------------------------------------------------------------------------");
//   console.log("Se ha conectado un Arduino");
//   console.log("------------------------------------------------------------------------");
//   console.log("");

// });

/** End SerialPort **/

// app.get('/', function(dato){
//   // res.sendfile(__dirname+'/public');
//   io.sockets.emit('lectura', dato);
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// io.sockets.on('connection', function(socket){
//     console.log('Alguien ha abierto un socket')
//     socket.on('enviar mensaje', function (mensaje){
//         console.log('mensaje recibido');
//         io.sockets.emit('recibir mensaje', mensaje);
//         console.log('mensaje enviado');
//     });
//     socket.on('nuevo usuario', function (IDuser){
//         console.log('Nuevo usuario');
//         Usuario.findById(IDuser, function (err, usuario)
//         {
//             socket.usuario = usuario;
//             usuariosactivos.push(usuario);
//             mostrarlogin(usuariosactivos);
//             io.sockets.emit('actualizarusuariosactivos', usuariosactivos);
//             console.log('actualizarusuariosactivos 76');
//             console.log()
//         });
//     });
// });


app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Middlewares de Express que nos permiten enrutar y poder realizar peticiones HTTP (GET, POST, PUT, DELETE)
//Funciones importantes para subir archivos
//app.use(bodyParser());
//app.use(bodyParser({uploadDir:'./images'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());


// Ruta de los archivos estáticos (HTML estáticos, JS, CSS,...)
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

//API rutas
//routes = require('./routes/index')(app);
routes = require('./routes/dist')(app);
routes = require('./routes/users')(app);
routes = require('./routes/tags')(app);
routes = require('./routes/posts')(app);
routes = require('./routes/temps')(app);
routes = require('./routes/usuarios')(app);

var PORT = 3000;
http.listen(PORT, function() {
  console.log("");
  console.log("--------------------------------------------------------------");
  console.log("Servidor escuchando en, http://localhost:"+PORT);
});

