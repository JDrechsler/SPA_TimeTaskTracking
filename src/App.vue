<template>
	<div id="app" class="container-fluid">
		<img src="./assets/logo.png">

		<SocketTest></SocketTest>


	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'

	import SocketTest from './components/SocketTest/SocketTest.vue'


	@Component({
		components: {
			SocketTest
		}
	})

	export default class App extends Vue {
		msg: string = "I am the parent of all childs!!!"
	}

</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		background-color: mintcream;
	}

</style>
