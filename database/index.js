const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orders', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('CONNECTED'));

const orderSchema = new mongoose.Schema({
  userName: { type: String, require: true, unique: true },
  foodItem: { type: String, require: true },
  restaurant: { type: String, require: true }
})

var Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;