const express = require('express');

const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

const Cart = require('./models/cart');

const Items = require('./models/items');

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 8081;

const uri = "mongodb+srv://roeyguy:1Y17eZA29nmV6x1F@cluster0.ohxtypl.mongodb.net/?retryWrites=true&w=majority"

async function addCart(items) {
    const cart = new Cart({
        name: items.name,
        email: items.email,
        address: items.address,
        cart: items.cart
    })
    const ret = await cart.save()
    return ret;
}

async function getItems(items) {
    const it = await Items.find();
    const ret = Object.values(it)[0].items;
    return ret;
}

app.post('/cart', async (req, res) => {
    console.log(req.body);
    const ret = addCart(req.body)
    return ret;
})

app.get('/getItems', async (req, res) => {
    const ret = await getItems()
    res.send(ret)
})

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("connected"))
  .catch((err) => console.log(err));

app.listen(PORT, console.log(`Server started on port ${PORT}`));

