<template>
	<StudentLayout>
		<b-col xl="9">
			<b-card no-body class="bg-transparent border rounded-3">
				<b-card-header class="bg-transparent border-bottom">
					<h3 class="mb-0">WishList</h3>
				</b-card-header>
				<b-card-body class="p-3 p-md-4">
					<b-row class="g-4">
						<b-col sm="6" lg="4" v-for="(item, idx) in bookmarkList" :key="idx">
							<WishlistCard :item="item" />
						</b-col>
					</b-row>
				</b-card-body>
			</b-card>
		</b-col>
	</StudentLayout>
</template>
<script setup lang="ts">
import StudentLayout from '@/layouts/StudentLayout.vue';
import { bookmarkList } from '@/views/accounts/student/bookmark/components/data';
import WishlistCard from '@/views/accounts/student/bookmark/components/WishlistCard.vue';
</script>