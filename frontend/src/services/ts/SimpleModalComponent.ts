import {defineComponent} from "vue";
import SimpleModalComponent from "@/components/SimpleModalComponent.vue";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        SimpleModalComponent
    },
    // type inference enabled
    props: {
        buttons: {
            type: Number,
            require: true
        },
        message: {
            type: String,
            require: true
        },
        del: {
            type: Boolean,
            value: false
        },
        objet:{
            type: Object,
            require : true
        },
        type:{
            type: String,
            require : true
        }
    },
    data() {
        return {}
    },
    methods: {
        unshowModal(popUpId: string) {
            const modal = document.getElementById(popUpId);
            if (modal) modal.style.display = "none";
        },
        deleteObjet() {
            console.log(this.type);
        }
    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/
})
