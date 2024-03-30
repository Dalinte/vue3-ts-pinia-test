import type { AxiosRequestConfig } from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { postApi } from '@entities/post';
import { successNotifications } from './notifications.ts';
import type { IPost } from './types.ts';

const namespace = 'posts';

// Т.к. удалить или изменить данные в jsonplaceholder апи нельзя, то
// в usePostsStore методы вызывают апи и добавляют фейковую логику изменения данных на фронте
export const usePostsStore = defineStore(namespace, () => {
  const posts = ref<IPost[]>([]);

  const fetchPosts = async () => {
    return postApi.getPosts().then((response) => {
      posts.value = response.data;
      return response.data;
    });
  };

  const createPost = async (props: postApi.ICreatePostProps) => {
    const config: AxiosRequestConfig = {
      notification: {
        text: successNotifications['createPost'],
      },
    };

    return postApi.createPost(props, config).then((response) => {
      posts.value.unshift(response.data);
      return response.data;
    });
  };

  const updatePost = async (post: IPost) => {
    const config: AxiosRequestConfig = {
      notification: {
        text: successNotifications['updatePost'],
      },
    };

    return postApi.updatePost(post, config).then((response) => {
      const index = posts.value.findIndex((item) => item.id === post.id);
      posts.value[index] = response.data;
      return response.data;
    });
  };

  const deletePost = async (postId: number) => {
    const config: AxiosRequestConfig = {
      notification: {
        text: successNotifications['deletePost'],
      },
    };

    return postApi.deletePost(postId, config).then((response) => {
      const index = posts.value.findIndex((item) => item.id === postId);
      posts.value.splice(index, 1);
      return response.data;
    });
  };

  return {
    posts,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
  };
});
