import mongo from 'mongoose';

const guestbookSchema = new mongo.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Number, required: true }
});

export default mongo.model('guestbook', guestbookSchema);