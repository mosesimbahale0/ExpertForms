import { Schema, model } from "mongoose";
// User Schema
const userSchema = new Schema({
    id: { type: Number, required: true, unique: true }, // Auto-incrementing ID
    username: { type: String, required: true, unique: true }, // Unique username
    fname: { type: String, required: true }, // First name
    lname: { type: String, required: true }, // Last name
});
// Post Schema
const postSchema = new Schema({
    post_id: { type: Number, required: true, unique: true }, // Auto-incrementing post ID
    user_id: { type: Number, required: true }, // User ID that created the post
    title: { type: String, required: true }, // Title of the post
    content: { type: String, required: true }, // Content of the post
    cover_image: { type: String, required: true }, // Cover image URL
    created_at: { type: Date, required: true }, // Creation timestamp
});
// Comment Schema
const commentSchema = new Schema({
    id: { type: String, required: true, unique: true }, // Unique ID for the comment
    postid: { type: Number, required: true }, // Post ID the comment is associated with
    sender: { type: String, required: true }, // Sender's username
    timestamp: { type: Date, required: true }, // Timestamp of the comment
    text: { type: String, required: true }, // Comment text
    replies: [
        {
            id: { type: String, required: true, unique: true }, // Unique ID for the reply
            messageId: { type: String, required: true }, // Message ID being replied to
            sender: { type: String, required: true }, // Sender's username for the reply
            timestamp: { type: Date, required: true }, // Timestamp of the reply
            text: { type: String, required: true }, // Reply text
        },
    ],
});
// Export Models
const User = model("User", userSchema); // User Model
const Post = model("Post", postSchema); // Post Model
const Comment = model("Comment", commentSchema); // Comment Model
export { User, Post, Comment };
