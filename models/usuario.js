/**
 * Created by raul on 5/12/16.
 */

var mongoose = require('mongoose');
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var usuarioEsquema = new Schema({
    nombre: {type: String},
    apellidos: {type: String},
    login: {type: String},
    password: {type: String},
    //rol: {type: String},
    provider_id: {type: String},
    urlfoto: {type: String, default:'/images/default-profile.png'}
});

module.exports = mongoose.model('Usuario', usuarioEsquema);