<template>
    <div>
        <div>
            <b-button v-b-modal.modal-1 @click="openModal">1111</b-button>
        </div>
        <Modal v-if="isModalOpen" @close="isModalOpen = false" title="Очень важная информация">
            <div class="information">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </Modal>    
    </div>
</template>
<script>
import Modal from './Modal'
export default {
    name:'userPage',
    components:{
        Modal,
    },
    created() {
        this.$log();
    },
    data() {
        return {
            isModalOpen:false,
        }
    },
    methods: {
        openModal(){
            this.isModalOpen = !this.isModalOpen;
        },
    },
}
</script>