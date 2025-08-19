const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/devopsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Simple schema
const ItemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', ItemSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Hello from DevOps Project 🚀');
});

app.post('/items', async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
});

app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
