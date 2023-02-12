<template>
    <div>
        <div class="col-12 row">
            <div class="col-5 mt-5">
                <h2>Информация о себе</h2>
                <div class="input-group mb-3" v-for="(fieldValue,fieldLabel,index) in formFields" :key="index">
                    {{fieldLabel}}: 
                    <input type="text" class="form-control" placeholder="First Name" v-model="formFields[fieldLabel]">
                </div>
            </div>
            <div class="col-5 mt-5">
                <h2>Предпросмотр։</h2>
                <p v-for="(fieldValue,fieldLabel,index) in formFields" :key="index">
                    {{`${fieldLabel}: ${fieldValue}`}}
                </p>
            </div>
            <div class="col-12">
                <button class="btn btn-success">Сохранить</button>
            </div>
        </div>
        <div class="col-12">
            <input type="text" v-model="additionalField">
            <button class="btn btn-success" @click="addNewField">Добавить</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'UserForm',
    data() {
        return {
            formFields:{
                firstName: '',
                lastName:'',
            },
            additionalField:'',
        }
    },
    methods: {
        addNewField(){
            this.$set(this.formFields,this.additionalField,'')
            /*
            this.formFields[this.additionalField] = '';
            console.log(this.formFields);*/
        },
    },
}
</script>