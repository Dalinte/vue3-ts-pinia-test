import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { postModel } from '@entities/post';
import { HttpClient } from '@shared/api';
import { ICreatePostProps } from './types.ts';

export const getPosts = async (): Promise<AxiosResponse<postModel.IPost[]>> => {
  return HttpClient.get('/posts');
};

export const createPost = (
  props: ICreatePostProps,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<postModel.IPost>> => {
  return HttpClient.post('/posts', JSON.stringify(props), config);
};

export const deletePost = (
  postId: number,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<postModel.IPost>> => {
  return HttpClient.delete(`/posts/${postId}`, config);
};

export const updatePost = (
  post: postModel.IPost,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<postModel.IPost>> => {
  return HttpClient.put(`/posts/${post.id}`, JSON.stringify(post), config);
};
