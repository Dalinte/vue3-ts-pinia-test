<script setup lang="ts">
import { ref } from 'vue';
import { postModel } from '@entities/post';
import { postApi } from '@entities/post';
import { useIsLoading, useValidations } from '@shared/lib';

const formValid = ref(false);
const isShow = ref(false);
const { isLoading, startLoading, finishLoading } = useIsLoading();
const { required } = useValidations();
const post = ref<postApi.ICreatePostProps>({
  body: 'Текст',
  title: 'Заголовок',
  userId: 1,
});

const resetPost = () => {
  post.value.title = '';
  post.value.body = '';
};

const handlerFormSubmit = () => {
  const store = postModel.usePostsStore();
  startLoading();

  store.createPost(post.value).finally(() => {
    isShow.value = false;
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

    <v-form v-model="formValid" @submit.prevent="handlerFormSubmit">
      <v-card prepend-icon="mdi-note-text" title="Добавление поста">
        <template #text>
          <v-text-field
            v-model="post.title"
            label="Заголовок"
            variant="outlined"
            class="my-2"
            :rules="[required]"
          ></v-text-field>
          <v-textarea
            v-model="post.body"
            label="Текст"
            variant="outlined"
            :rules="[required]"
          ></v-textarea>
        </template>

        <v-divider></v-divider>

        <template #actions>
          <v-spacer></v-spacer>
          <v-btn text="Закрыть" variant="plain" @click="isShow = false"></v-btn>
          <v-btn
            type="submit"
            :disabled="!formValid"
            :loading="isLoading"
            color="primary"
            text="Сохранить"
            variant="tonal"
          ></v-btn>
        </template>
      </v-card>
    </v-form>
  </v-dialog>
</template>
