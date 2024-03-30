<script setup lang="ts">
import { reactive, ref } from 'vue';
import { postModel } from '@entities/post';

const props = defineProps<{
  post: postModel.IPost;
}>();

const isShow = ref(false);
const isLoading = ref(false);
const post = reactive({ ...props.post });

const handlerUpdateClick = () => {
  const store = postModel.usePostsStore();
  isLoading.value = true;

  store.updatePost(post).finally(() => {
    isShow.value = false;
    isLoading.value = false;
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

    <v-card prepend-icon="mdi-note-text" title="Изменения поста">
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
          :loading="isLoading"
          color="primary"
          text="Сохранить"
          variant="tonal"
          @click="handlerUpdateClick"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
