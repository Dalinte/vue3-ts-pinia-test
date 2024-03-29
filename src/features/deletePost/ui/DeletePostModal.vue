<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { postModel } from '@entities/post';

const isShow = ref(false);

const props = defineProps<{
  id: number;
}>();

const handlerDeleteClick = () => {
  const store = postModel.usePostsStore();
  store.deletePost(props.id).finally(() => {
    isShow.value = false;
  });
};
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isShow" max-width="400" persistent>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          icon="$delete"
          variant="text"
          color="red"
        ></v-btn>
      </template>

      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 text-medium-emphasis ps-2">
            Подтверждение действия
          </div>
          <v-btn
            icon="mdi-close"
            variant="text"
            @click="isShow = false"
          ></v-btn>
        </v-card-title>
        <v-divider class="mb-2"></v-divider>
        <v-card-text>
          <div class="text-medium-emphasis mb-4">
            Вы действительно хотите удалить пост №{{ props.id }}?
          </div>
        </v-card-text>

        <template v-slot:actions>
          <v-spacer></v-spacer>
          <v-btn @click="isShow = false"> Отменить </v-btn>
          <v-btn color="red" @click="handlerDeleteClick"> Удалить </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
