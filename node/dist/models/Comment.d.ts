import { Schema } from "mongoose";
declare const _default: import("mongoose").Model<{
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
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
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
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
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
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
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
}>> & import("mongoose").FlatRecord<{
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=Comment.d.ts.map