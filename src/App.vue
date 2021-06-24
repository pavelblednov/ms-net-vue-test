<template>
	<div id="app">
		<div class="posts" v-if="aPosts.length">
			<div class="row row-cols-4">
				<div class="col" v-for="oPost in aPosts" :key="'post' + oPost.id">
					<post-card :oPost="oPost" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PostCard from '@/components/PostCard.vue';

export default {
	name: 'App',

	components: {
		'post-card': PostCard
	},
	
	data: function ()
	{
		return {
			aPosts: []
		}
	},

	mounted: async function ()
	{
		this.aPosts = await this.$store.dispatch('FETCH_POSTS');
	}
}
</script>

<style lang="scss">
	html,
	body
	{
		margin: 0;
		padding: 0
	}

	body
	{
		background-color: #F4F4F4;
	}

	#app
	{
		font-family: 'Ubuntu', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin-top: 60px;
	}

	.posts
	{
		max-width: 1890px;
		margin: auto;
		padding-left: 15px;
		padding-right: 15px;

		.row
		{
			margin-left: -10px;
			margin-right: -10px;
		}

		.col
		{
			padding-left: 10px;
			padding-right: 10px;
		}
	}
</style>
