import { IUser } from "./user.interface";

export interface IStory {
  id: string;
  createdDate: string;
  updatedDate: string;
  title: string;
  content: string;
  imageUrl: string;
  likesCount: number;
  author: IUser;
}
