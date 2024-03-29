import { AxiosResponse } from 'axios';
import { postModel } from '@entities/post';
import { HttpClient } from '@shared/api';
import { ICreatePostProps } from './types.ts';

export const getPosts = async (): Promise<AxiosResponse<postModel.IPost[]>> => {
  return HttpClient.get('/posts');
};

export const createPost = (
  props: ICreatePostProps,
): Promise<AxiosResponse<postModel.IPost>> => {
  return HttpClient.post('/posts', JSON.stringify(props));
};

export const deletePost = (
  postId: number,
): Promise<AxiosResponse<postModel.IPost>> => {
  return HttpClient.delete(`/posts/${postId}`);
};

export const updatePost = (
  post: postModel.IPost,
): Promise<AxiosResponse<postModel.IPost>> => {
  return HttpClient.put(`/posts/${post.id}`, JSON.stringify(post));
};
