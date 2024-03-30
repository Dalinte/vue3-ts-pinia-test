<script setup lang="ts">
import { ref } from 'vue';
import { postModel } from '@entities/post';
import { postApi } from '@entities/post';

const isShow = ref(false);
const post = ref<postApi.ICreatePostProps>({
  body: '',
  title: '',
  userId: 1,
});

const resetPost = () => {
  post.value.title = '';
  post.value.body = '';
};

const handlerUpdateClick = () => {
  const store = postModel.usePostsStore();

  store.createPost(post.value).finally(() => {
    isShow.value = false;
    resetPost();
  });
};
</script>

<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="isShow" max-width="600">
      <template #activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          prepend-icon="mdi-plus-circle"
          variant="text"
          color="grey-darken-2"
        >
          Добавить пост
        </v-btn>
      </template>

      <v-card prepend-icon="mdi-note-text" title="Добавление поста">
        <template #text>
          <v-text-field
            v-model="post.title"
            label="Заголовок"
            variant="outlined"
          ></v-text-field>
          <v-textarea
            v-model="post.body"
            label="Текст"
            variant="outlined"
          ></v-textarea>
        </template>

        <v-divider></v-divider>

        <template #actions>
          <v-spacer></v-spacer>
          <v-btn text="Закрыть" variant="plain" @click="isShow = false"></v-btn>
          <v-btn
            color="primary"
            text="Сохранить"
            variant="tonal"
            @click="handlerUpdateClick"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
