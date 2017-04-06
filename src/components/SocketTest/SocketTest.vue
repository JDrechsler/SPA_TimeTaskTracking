<template>
	<section>
		<h3>SocketTest-Component</h3>
		<h1>TimeTaskTracking {{status}}</h1>
		<div class="form-group">
			<label>Active:</label><br>
			<label>{{foregroundApp}}</label>
		</div>
	</section>
</template>

<script lang="ts">
	export * from './SocketTest.ts'

</script>

<style>
	.test {
		background-color: aquamarine;
	}

</style>
