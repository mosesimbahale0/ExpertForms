import { User, Post, Comment } from "./models"; // Assuming models are exported from models.js
import { ObjectId } from "mongodb"; // Needed for generating unique IDs

const resolvers = {
  Query: {
    async getUsers() {
      try {
        return await User.find({});
      } catch (error) {
        throw new Error("Error fetching users: " + error.message);
      }
    },
    async getUser(_, { id }) {
      try {
        return await User.findOne({ id });
      } catch (error) {
        throw new Error("Error fetching user: " + error.message);
      }
    },
    async getPosts() {
      try {
        return await Post.find({});
      } catch (error) {
        throw new Error("Error fetching posts: " + error.message);
      }
    },
    async getPost(_, { post_id }) {
      try {
        return await Post.findOne({ post_id });
      } catch (error) {
        throw new Error("Error fetching post: " + error.message);
      }
    },
    async getComments(_, { postid }) {
      try {
        return await Comment.find({ postid });
      } catch (error) {
        throw new Error("Error fetching comments: " + error.message);
      }
    },
  },
  Mutation: {
    async createUser(_, { username, fname, lname }) {
      try {
        const newUser = new User({
          id: await User.countDocuments({}) + 1, // Auto-increment ID
          username,
          fname,
          lname,
        });
        return await newUser.save();
      } catch (error) {
        throw new Error("Error creating user: " + error.message);
      }
    },
    async createPost(_, { user_id, title, content, cover_image }) {
      try {
        const newPost = new Post({
          post_id: await Post.countDocuments({}) + 1, // Auto-increment ID
          user_id,
          title,
          content,
          cover_image,
          created_at: new Date(),
        });
        return await newPost.save();
      } catch (error) {
        throw new Error("Error creating post: " + error.message);
      }
    },
    async createComment(_, { postid, sender, text }) {
      try {
        const newComment = new Comment({
          id: String(new ObjectId()), // Unique ID
          postid,
          sender,
          timestamp: new Date(),
          text,
          replies: [],
        });
        return await newComment.save();
      } catch (error) {
        throw new Error("Error creating comment: " + error.message);
      }
    },
    async addReply(_, { commentId, messageId, sender, text }) {
      try {
        const reply = {
          id: String(new ObjectId()), // Unique ID
          messageId,
          sender,
          timestamp: new Date(),
          text,
        };
        const updatedComment = await Comment.findOneAndUpdate(
          { id: commentId },
          { $push: { replies: reply } },
          { new: true } // Return the updated document
        );
        if (!updatedComment) {
          throw new Error("Comment not found");
        }
        return reply;
      } catch (error) {
        throw new Error("Error adding reply: " + error.message);
      }
    },
  },
};

export { resolvers };
