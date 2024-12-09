export declare const resolvers: {
    Query: {
        getUsers: () => Promise<(import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            username: string;
            fname: string;
            lname: string;
        }> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            username: string;
            fname: string;
            lname: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getUser: (_: any, { id }: {
            id: any;
        }) => Promise<(import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            username: string;
            fname: string;
            lname: string;
        }> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            username: string;
            fname: string;
            lname: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null>;
        getPosts: () => Promise<(import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            user_id: import("mongoose").Types.ObjectId;
            title: string;
            content: string;
            cover_image: string;
        }> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            user_id: import("mongoose").Types.ObjectId;
            title: string;
            content: string;
            cover_image: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getPost: (_: any, { id }: {
            id: any;
        }) => Promise<(import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            user_id: import("mongoose").Types.ObjectId;
            title: string;
            content: string;
            cover_image: string;
        }> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            user_id: import("mongoose").Types.ObjectId;
            title: string;
            content: string;
            cover_image: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null>;
        getComments: (_: any, { postid }: {
            postid: any;
        }) => Promise<(import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            text: string;
            postid: import("mongoose").Types.ObjectId;
            sender: string;
            replies: import("mongoose").Types.DocumentArray<{
                text: string;
                sender: string;
                messageId?: import("mongoose").Types.ObjectId | null | undefined;
            }>;
        }> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            text: string;
            postid: import("mongoose").Types.ObjectId;
            sender: string;
            replies: import("mongoose").Types.DocumentArray<{
                text: string;
                sender: string;
                messageId?: import("mongoose").Types.ObjectId | null | undefined;
            }>;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
    };
    Mutation: {
        createUser: (_: any, { username, fname, lname }: {
            username: any;
            fname: any;
            lname: any;
        }) => Promise<import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            username: string;
            fname: string;
            lname: string;
        }> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            username: string;
            fname: string;
            lname: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }>;
        createPost: (_: any, { user_id, title, content, cover_image }: {
            user_id: any;
            title: any;
            content: any;
            cover_image: any;
        }) => Promise<import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            user_id: import("mongoose").Types.ObjectId;
            title: string;
            content: string;
            cover_image: string;
        }> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            user_id: import("mongoose").Types.ObjectId;
            title: string;
            content: string;
            cover_image: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }>;
        createComment: (_: any, { postid, sender, text }: {
            postid: any;
            sender: any;
            text: any;
        }) => Promise<import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            text: string;
            postid: import("mongoose").Types.ObjectId;
            sender: string;
            replies: import("mongoose").Types.DocumentArray<{
                text: string;
                sender: string;
                messageId?: import("mongoose").Types.ObjectId | null | undefined;
            }>;
        }> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            text: string;
            postid: import("mongoose").Types.ObjectId;
            sender: string;
            replies: import("mongoose").Types.DocumentArray<{
                text: string;
                sender: string;
                messageId?: import("mongoose").Types.ObjectId | null | undefined;
            }>;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }>;
        addReply: (_: any, { commentId, messageId, sender, text }: {
            commentId: any;
            messageId: any;
            sender: any;
            text: any;
        }) => Promise<{
            messageId: any;
            sender: any;
            text: any;
        }>;
    };
};
//# sourceMappingURL=index.d.ts.map