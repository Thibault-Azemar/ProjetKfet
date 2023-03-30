import { defineComponent } from 'vue'
import GroupModalComponent from '../../components/GroupModalComponent.vue'
import Group from "@/services/model/GroupModel";


// @ts-ignore
// @ts-ignore
export default defineComponent({
    components: {
        GroupModalComponent,
    },
    props: {

    },
    data() {
        let isGroup: Group | undefined;
        return {
            isGroup
        }
    },
    methods: {
        showEditModal(group?: Group) {
            this.isGroup = group;
            const modalGroup = document.getElementById("groupModal");
            if (modalGroup) modalGroup.style.display = "block";
            const modal = document.getElementById("groupEditModal");
            if (modal) modal.style.display = "block";
        },
        unshowModal(idModal: string) {
            this.$emit('unshowModal', idModal);
        },
        deleteGroup(group : Group){
            this.$emit('deleteGroup', group);
        },
        editGroup(group : Group){

        },
        addGroup(){

        }

    }

})