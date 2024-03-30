<script setup lang="ts">
import { reactive, ref } from 'vue';
import { postModel } from '@entities/post';
import { useIsLoading, useValidations } from '@shared/lib';

const props = defineProps<{
  post: postModel.IPost;
}>();

const formValid = ref(false);
const isShow = ref(false);
const { isLoading, startLoading, finishLoading } = useIsLoading();
const post = reactive({ ...props.post });
const { required } = useValidations();

const handlerFormSubmit = () => {
  const store = postModel.usePostsStore();
  startLoading();

  store.updatePost(post).finally(() => {
    isShow.value = false;
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

    <v-form v-model="formValid" @submit.prevent="handlerFormSubmit">
      <v-card prepend-icon="mdi-note-text" title="Изменения поста">
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
