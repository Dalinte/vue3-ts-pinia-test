import { postModel } from '@entities/post';
import { HttpClient } from '@shared/api';

export const getPosts = async () => {
  return HttpClient.get('/posts');
};

export const createPost = (postId: number) => {
  return HttpClient.post(`/posts/${postId}`);
};

export const deletePost = (postId: number) => {
  return HttpClient.delete(`/posts/${postId}`);
};

export const updatePost = (postId: number, post: postModel.IPost) => {
  return HttpClient.put(`/posts/${postId}`, JSON.stringify(post));
};
