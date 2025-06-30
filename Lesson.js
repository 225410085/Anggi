const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    title: String,
    content: String,
    quiz: [{ question: String, options: [String], answer: String }],
});

module.exports = mongoose.model('Lesson', lessonSchema);