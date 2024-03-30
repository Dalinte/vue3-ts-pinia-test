<script setup lang="ts">
import { postModel } from '@entities/post';
import { useIsLoading, useModal } from '@shared/lib';

const { isShow, closeModal } = useModal(false);
const { isLoading, startLoading, finishLoading } = useIsLoading();

const props = defineProps<{
  id: number;
}>();

const handlerDeleteClick = () => {
  const store = postModel.usePostsStore();
  startLoading();

  store.deletePost(props.id).finally(() => {
    closeModal();
    finishLoading();
  });
};
</script>

<template>
  <v-dialog v-model="isShow" max-width="400">
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        icon="mdi-trash-can-outline"
        variant="text"
        color="red"
      ></v-btn>
    </template>

    <v-card prepend-icon="mdi-note-text" title="Подтверждение действия">
      <v-divider></v-divider>
      <template #text>
        <div class="text-medium-emphasis mb-4 mt-2">
          Вы действительно хотите удалить пост №{{ props.id }}?
        </div>
      </template>

      <template #actions>
        <v-spacer></v-spacer>
        <v-btn @click="isShow = false">Отменить</v-btn>
        <v-btn
          :loading="isLoading"
          color="red"
          variant="tonal"
          @click="handlerDeleteClick"
        >
          Удалить
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
