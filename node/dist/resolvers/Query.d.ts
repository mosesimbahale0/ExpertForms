export declare const Query: {
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
//# sourceMappingURL=Query.d.ts.map