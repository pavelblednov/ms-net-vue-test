<template>
	<div class="post-card">
		<figure class="post-card__image">
			<img
				:src="oCurrPost.image"
				alt="demo"
			/>

			<span
				class="post-card__tag"
				v-text="'#' + oCurrPost.tag"
			></span>
		</figure>


		<h3 class="post-card__title">
			<a
				href="#"
				v-text="oCurrPost.name"
			></a>
		</h3>

		<p v-text="oCurrPost.description"></p>

		<button
			class="post-card__like"
			type="button"
			v-text="oCurrPost.like"
			@click="onclickLike($event, oCurrPost)"
		></button>

		<span
			class="post-card__date"
			v-text="oCurrPost.date"
		></span>
	</div>
</template>

<script>
export default {
	name: 'PostCard',

	props: {
		oPost: {
			type: Object,
			default: function () { return {}; }
		}
	},

	data: function ()
	{
		return {
			oCurrPost: Object.assign({}, this.oPost)
		}
	},

	methods: {
		onclickLike: function (e, _oPost)
		{
			var nTarget = e.target;

			nTarget.disabled = true;

			_oPost.like++;

			this.$store.dispatch('UPDATE_POST', _oPost);

			nTarget.disabled = false;
		}
	}
}
</script>

<style lang="scss">
	.post-card
	{
		position: relative;
		margin-bottom: 30px;
		padding: 10px;
		background-color: #fff;
		font-size: 15px;
		line-height: 22px;
		color: #666565;

		&__image
		{
			position: relative;
			margin: 0;
			margin-bottom: 20px;
			padding-top: percentage(250/430);
			background-color: red;
			overflow: hidden;

			&::after
			{
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 92px;
				background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
				opacity: 0.5;
				z-index: 1;
			}

			img
			{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&__tag
		{
			position: absolute;
			bottom: 10px;
			left: 8px;
			padding: 9px 10px;
			line-height: 1;
			font-size: 15px;
			color: #fff;
			text-transform: uppercase;
			background: rgba(141, 190, 80, 0.5);
			backdrop-filter: blur(10px);
			border-radius: 4px;
			z-index: 2;
		}

		&__title
		{
			margin: 20px 0 28px;
			font-weight: 500;
			font-size: 18px;
			line-height: 21px;
			color: #000;

			a
			{
				text-decoration: none;
				color: inherit;
			}
		}

		&__like
		{
			float: right;
			border: none;
			background: transparent url('~@/assets/heart.svg') no-repeat 0 0;
			margin: 0;
			padding: 0 0 0 20px;
			cursor: pointer;
			font-size: 12px;
			color: #909599;
		}

		&__date
		{
			font-style: italic;
			font-size: 13px;
			color: #6c767e;
		}
	}
</style>