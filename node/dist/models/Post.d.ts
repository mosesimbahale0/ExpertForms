import { Schema } from "mongoose";
declare const _default: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user_id: import("mongoose").Types.ObjectId;
    title: string;
    content: string;
    cover_image: string;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
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
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user_id: import("mongoose").Types.ObjectId;
    title: string;
    content: string;
    cover_image: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user_id: import("mongoose").Types.ObjectId;
    title: string;
    content: string;
    cover_image: string;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user_id: import("mongoose").Types.ObjectId;
    title: string;
    content: string;
    cover_image: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=Post.d.ts.map