<template>
	<section class="tsTest">
		<p></p>
		<button class="btn btn-success" @click="onClick">{{msg}}</button>
	</section>
</template>

<script lang="ts">
	export * from './TsTest.ts'

</script>

<style>
	.tsTest {
		background-color: antiquewhite;
	}

</style>
