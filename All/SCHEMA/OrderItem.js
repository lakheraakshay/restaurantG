const mongoose = require('mongoose');
const schema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "USER" },
    foodItem: [{ food: { type: mongoose.Schema.Types.ObjectId, ref: "FOODITEM" }, quantity: Number },],
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "restaurant" },

    orderTime: { type: String, default: Date() },
    delivered: { type: Boolean, default: false },
    deliveredTime: { type: String }
})
const model = mongoose.model("ORDER", schema)
module.exports = model