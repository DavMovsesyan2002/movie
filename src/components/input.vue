<template>
    <div>
        <div>
            <label>
                Введите email:
                <input type="email" :value="email" @input="emailInput($event.target.value)">
            </label>
            <label>
                Введите password:
                <input type="password" :value="password" @input="passwordInput($event.target.value)">
            </label>
        </div>
        <div>
            email: {{email}}
            password: {{password}}
        </div>
    </div>
</template>
<script>
export default {
    name:'input',
    data() {
        return{
            email:"david@mail.ru",
            password:"123456"
        }
    },
    methods: {
        emailInput(value){
            this.email = value;
        },
        passwordInput(value){
            this.password = value;
        }
    },
}
</script>