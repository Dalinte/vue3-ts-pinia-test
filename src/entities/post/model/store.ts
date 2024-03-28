import { defineStore } from 'pinia';
import { ref } from 'vue';
import { postApi } from '@entities/post';
import { IPost } from './types.ts';

const namespace = 'posts';

export const usePostsStore = defineStore(namespace, () => {
  const posts = ref<IPost[]>([]);

  const getPosts = postApi.getPosts().then((response) => {
    posts.value = response.data;
    return response.data;
  });

  const createPost = (props: postApi.ICreatePostProps) => {
    return postApi.createPost(props).then((response) => {
      posts.value.unshift(response.data);
      return response.data;
    });
  };

  const updatePost = (post: IPost) => {
    postApi.updatePost(post).then((response) => {
      const index = posts.value.findIndex((item) => item.id === post.id);
      posts.value[index] = response.data;
      return response.data;
    });
  };

  const deletePost = (postId: number) => {
    postApi.deletePost(postId).then(() => {
      const index = posts.value.findIndex((item) => item.id === postId);
      posts.value = posts.value.splice(index, 1);
      return posts.value;
    });
  };

  return {
    posts,
    getPosts,
    createPost,
    updatePost,
    deletePost,
  };
});
