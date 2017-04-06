import Vue from 'vue'
import Component from 'vue-class-component'

import * as io from 'socket.io-client'
const socket = io('localhost:3000') //Connect to socketio Server...whatever port my server (not dev-server) is using

@Component({
	components: {

	}
})

export default class SocketTest extends Vue {

	status: string = "working"

	foregroundApp: String = ''

	showForegroundApp() {
		console.log("client-wants-foregroundApp")
		socket.emit('client-wants-foregroundApp')
	}

	created() {
		var _this = this
		console.log('Created')

		socket.emit('halloVonClient')

		socket.on('halloVonServer', function (message: string) {
			_this.status = 'connected to server'
			console.log(message)
		})

		socket.on('server-sends-foregroundApp-permanently', function (message: string) {
			_this.foregroundApp = message
		})
	}
}