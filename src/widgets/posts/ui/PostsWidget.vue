<script setup lang="ts">
import { onMounted } from 'vue';
import { DeletePostModal } from '@features/deletePost';
import { postModel } from '@entities/post';

const headers = [
  { title: '№', key: 'id' },
  { title: 'Заголовок', key: 'title' },
  { title: 'Текст', key: 'body' },
  { title: '', key: 'edit' },
  { title: '', key: 'delete' },
];

const postsStore = postModel.usePostsStore();

onMounted(postsStore.fetchPosts);
</script>

<template>
  <!-- Компонент для отображения больших списков -->
  <v-data-table-virtual
    :headers="headers"
    :items="postsStore.posts"
    height="400"
  >
    <template #[`item.edit`]="{ item }">
      <UpdatePostModal :post="item" />
    </template>
    <template #[`item.delete`]="{ item }">
      <DeletePostModal :id="item.id" />
    </template>
  </v-data-table-virtual>
</template>

<style scoped></style>
