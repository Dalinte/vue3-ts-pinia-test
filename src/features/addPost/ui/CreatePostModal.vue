<script setup lang="ts">
import { ref } from 'vue';
import { PostForm, postModel } from '@entities/post';
import { postApi } from '@entities/post';
import { useIsLoading, useModal } from '@shared/lib';

const { isShow, closeModal } = useModal(false);
const { isLoading, startLoading, finishLoading } = useIsLoading();
const post = ref<postApi.ICreatePostProps>({
  body: 'Текст',
  title: 'Заголовок',
  userId: 1,
});

const resetPost = () => {
  post.value.title = '';
  post.value.body = '';
};

const handleFormSubmit = (post: postApi.ICreatePostProps) => {
  const store = postModel.usePostsStore();
  startLoading();

  store.createPost(post).finally(() => {
    closeModal();
    finishLoading();
    resetPost();
  });
};
</script>

<template>
  <v-dialog v-model="isShow" max-width="600">
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        prepend-icon="mdi-plus-circle"
        variant="text"
        color="grey-darken-2 ma-3 text-center"
      >
        Добавить пост
      </v-btn>
    </template>

    <post-form
      title="Добавление поста"
      :is-loading="isLoading"
      :post="post"
      @close="closeModal"
      @submit="handleFormSubmit"
    />
  </v-dialog>
</template>
