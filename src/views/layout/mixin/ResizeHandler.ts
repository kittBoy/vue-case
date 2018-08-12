import {Vue, Component, Emit} from 'vue-property-decorator'

const {body} = document
const WIDTH = 1024
const RATIO = 3

@Component
export default class ResizeMixin extends Vue {

    beforeMount() {
        window.addEventListener('resize', this.resizeHandler)
    }


    mounted() {
        const isMobile = this.isMobile()
        if (isMobile) {
            this.$store.dispatch('toggleDevice', 'mobile')
            this.$store.dispatch('closeSideBar', {withoutAnimation: true})
        }
    }

    @Emit()
    isMobile() {
        const rect = body.getBoundingClientRect()
        return rect.width - RATIO < WIDTH
    }

    @Emit()
    resizeHandler() {
        if (!document.hidden) {
            const isMobile = this.isMobile()
            this.$store.dispatch('toggleDevice', isMobile ? 'mobile' : 'desktop')

            if (isMobile) {
                this.$store.dispatch('closeSideBar', {withoutAnimation: true})
            }
        }
    }

}
