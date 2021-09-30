export type CommentType = {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  postId: number;
  userId: number;
};
export default class Comment {
  comment: CommentType;

  constructor(comment: CommentType) {
    this.comment = comment;
  }
}
