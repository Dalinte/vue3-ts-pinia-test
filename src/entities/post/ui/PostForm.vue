<script setup lang="ts">
import { reactive, ref } from 'vue';
import { postModel } from '@entities/post';
import { useValidations } from '@shared/lib';

const props = defineProps<{
  post: Partial<postModel.IPost>;
  isLoading: boolean;
  title: string;
}>();

const emit = defineEmits(['submit', 'close']);

const formValid = ref(false);

const { required } = useValidations();
const post = reactive({ ...props.post });

const handleSubmit = () => {
  emit('submit', post);
};
const handleClose = () => {
  emit('close');
};
</script>

<template>
  <v-form v-model="formValid" @submit.prevent="handleSubmit">
    <v-card prepend-icon="mdi-note-text" :title="title">
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
        <v-btn text="Закрыть" variant="plain" @click="handleClose"></v-btn>
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
</template>
