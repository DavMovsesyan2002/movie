<template>
    <div>
        <b-modal id="modal-1" title="BootstrapVue" hide-footer>
            <div class="modalBody" ref="modalBody" @scroll="onBodyScroll">
                <h5>{{title}}</h5>
                <div class="my-4 col-12">
                    <slot></slot>
                </div>
            </div>
            <div class='col-12 d-flex justify-content-between'>
                <button class="btn btn-success" @click="closeModal">Отмена</button>
                <button class="btn btn-success" :disabled="!isRulesReaded">Сохранить</button>
            </div>
        </b-modal>
    </div>
</template>
<script>
// import sc


rollHandler from '../mixins/scrollHandler';
export default {
    name:'Modal',
    props:{
        title:{
            type:String,
            default:'',
        } 
    },
    // mixins:[scrollHandler],
    data() {
        return {
            isRulesReaded:false,
        }
    },
    beforeCreate() {
        console.log("creaet");
    },
    methods: {
        closeModal(){
            this.$emit('close')
        },
        onScrollEnd(){
            this.isRulesReaded = true;
        },
        //--------------------refs 
        // onBodyScroll(){
            
        //     const modalBody = this.$refs.modalBody;
        //     if(modalBody.clientHeight + modalBody.scrollTop >= modalBody.scrollHeight){
        //         this.isRulesReaded = true
        //     }else{
        //         this.isRulesReaded = false
        //     }
        //     console.log("clientHeight-"+modalBody.clientHeight +" scrollTop-"+ modalBody.scrollTop+" scrollHeight"+modalBody.scrollHeight);
        // },
    },
}
</script>
<style scopped>
    .modalBody{
        height:200px;
        overflow-y:scroll;
    }
</style>