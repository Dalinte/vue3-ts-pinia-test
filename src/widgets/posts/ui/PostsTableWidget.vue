<script setup lang="ts">
import { onMounted } from 'vue';
import { VDataTableVirtual } from 'vuetify/components';
import { DeletePostModal } from '@features/deletePost';
import { UpdatePostModal } from '@features/updatePost';
import { postModel } from '@entities/post';

const headers: VDataTableVirtual['headers'] = [
  { title: '№', key: 'id', sortable: false },
  { title: 'Заголовок', key: 'title', sortable: false },
  { title: 'Текст', key: 'body', sortable: false },
  { title: '', key: 'edit', sortable: false },
  { title: '', key: 'delete', sortable: false },
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

<style scoped>
:deep(.v-data-table__td) {
  text-align: start;
}
</style>
