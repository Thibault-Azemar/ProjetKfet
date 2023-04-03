import { defineComponent } from 'vue'
import GroupModalComponent from '../../components/GroupModalComponent.vue'
import Group from "@/services/model/GroupModel";
import AccountsRepository from '../Repository/AccountsRepository';


// @ts-ignore
// @ts-ignore
export default defineComponent({
    components: {
        GroupModalComponent,
    },
    props: {

    },
    data() {
        const groups = new Array<Group>();
        let isGroup: Group | undefined;
        return {
            isGroup,
            groups
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
        deleteGroup(group: Group) {
            this.$emit('deleteGroup', group);
        },
        editGroup(group: Group) {
            const name = document.getElementById("name") as HTMLInputElement;
            const AccountRepo = new AccountsRepository();
            AccountRepo.editGroup(group.id, name.value).then((response) => {
                this.$emit('editGroup', response);
                this.groups.forEach((groupFromList: Group) => {
                    if (group.id === groupFromList.id) {
                        groupFromList.name = name.value;
                    }
                })
                this.unshowModal("groupEditModal");
                location.reload();
            }
            ).catch((error) => {
                alert(error)
            });
        },
        addGroup() {
            const name = document.getElementById("name") as HTMLInputElement;
            const AccountRepo = new AccountsRepository();
            AccountRepo.addGroup(name.value).then((response) => {
                this.$emit('addGroup', response);
                this.unshowModal("groupEditModal");
                location.reload();
            }
            ).catch((error) => {
                alert(error)
            });
        },
        getGroup() {
            const AccountRepo = new AccountsRepository();
            AccountRepo.getGroups().then((response) => {
                this.groups = response;
            }
            ).catch((error) => {
                alert(error)
            }
            );
        }
    },
    mounted() {
        this.getGroup();
    }

})