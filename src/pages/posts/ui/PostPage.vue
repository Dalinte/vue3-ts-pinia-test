<script setup lang="ts">
import { PostsTableWidget } from '@widgets/posts';
import { CreatePostModal } from '@features/addPost';
</script>

<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2 d-flex justify-end">
          <create-post-modal />
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2">
          <posts-table-widget />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
