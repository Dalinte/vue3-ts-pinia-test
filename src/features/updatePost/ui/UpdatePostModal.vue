<script setup lang="ts">
import { PostForm, postModel } from '@entities/post';
import { useIsLoading, useModal } from '@shared/lib';

const props = defineProps<{
  post: postModel.IPost;
}>();

const { isShow, closeModal } = useModal(false);
const { isLoading, startLoading, finishLoading } = useIsLoading();

const handleFormSubmit = (post: postModel.IPost) => {
  const store = postModel.usePostsStore();
  startLoading();

  store.updatePost(post).finally(() => {
    closeModal();
    finishLoading();
  });
};
</script>

<template>
  <v-dialog v-model="isShow" max-width="600">
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        icon="mdi-pencil"
        variant="text"
        color="grey-darken-2"
      ></v-btn>
    </template>

    <post-form
      title="Изменения поста"
      :is-loading="isLoading"
      :post="props.post"
      @close="closeModal"
      @submit="handleFormSubmit"
    />
  </v-dialog>
</template>
