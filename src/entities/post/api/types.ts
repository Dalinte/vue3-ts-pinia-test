import { postModel } from '@entities/post';

export type ICreatePostProps = Omit<postModel.IPost, 'id'>;
