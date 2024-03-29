<script setup lang="ts">
import { postModel } from '@entities/post';

const headers = [
  { title: 'Id', key: 'id' },
  { title: 'Title', key: 'title' },
  { title: 'Body', key: 'body' },
  { title: '', key: 'edit' },
  { title: '', key: 'delete' },
];

const postsStore = postModel.usePostsStore();
</script>

<template>
  <!-- Компонент для отображения больших списков -->
  <v-data-table-virtual
    :headers="headers"
    :items="postsStore.posts"
    height="400"
  >
    <template #[`item.edit`]> Редактировать </template>
    <template #[`item.delete`]> Удалить </template>
  </v-data-table-virtual>
</template>

<style scoped></style>
