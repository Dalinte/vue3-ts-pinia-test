<script setup lang="ts">
import { onMounted } from 'vue';
import { VDataTableVirtual } from 'vuetify/components';
import { DeletePostModal } from '@features/deletePost';
import { UpdatePostModal } from '@features/updatePost';
import { postModel } from '@entities/post';
import { useIsLoading } from '@shared/lib';

const headers: VDataTableVirtual['headers'] = [
  { title: '№', key: 'id', sortable: false },
  { title: 'Заголовок', key: 'title', sortable: false },
  { title: 'Текст', key: 'body', sortable: false },
  { title: '', key: 'edit', sortable: false },
  { title: '', key: 'delete', sortable: false },
];

const { isLoading, startLoading, finishLoading } = useIsLoading();

const postsStore = postModel.usePostsStore();

onMounted(() => {
  startLoading();
  postsStore.fetchPosts().finally(finishLoading);
});
</script>

<template>
  <!-- Компонент для отображения больших списков -->
  <v-data-table-virtual
    :headers="headers"
    :items="postsStore.posts"
    height="400"
    :loading="isLoading"
  >
    <template #[`item.edit`]="{ item }">
      <div class="pa-3">
        <update-post-modal :post="item" />
      </div>
    </template>
    <template #[`item.delete`]="{ item }">
      <div class="pa-3">
        <delete-post-modal :id="item.id" />
      </div>
    </template>
  </v-data-table-virtual>
</template>

<style scoped>
:deep(.v-data-table__td) {
  text-align: start;
}
</style>
