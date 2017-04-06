import Vue from 'vue'
import Component from 'vue-class-component'

@Component({

})
export default class TsTest extends Vue {

	msg: string = "Load Message!"

	message: string = 'Hello!'

	onClick(): void {
		window.alert(this.message)
	}
}