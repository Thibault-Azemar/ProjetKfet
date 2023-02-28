import {defineComponent} from "vue";
import SimpleModalComponent from "@/components/SimpleModalComponent.vue";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        SimpleModalComponent
    },
    // type inference enabled
    props: {
        buttons: {
            type: Number,
            require : true
        },
        message:{
            type: String,
            require: true
        },
        del:{
            type: Boolean,
            value: false
        }
    },
    data() {
        return{

        }
    },
    methods:{
        test(){
            console.log(this.buttons, typeof this.buttons, this.message, this.del, typeof this.del)
        },
        unshowPopUp(popUpId:string){
            const modal = document.getElementById(popUpId);
            if(modal !== null){
                modal.style.display="none";
            }
        }
    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/
})
