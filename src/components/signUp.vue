<template>
    <div>
       <div class="col-6 m-auto mt-5">
            <form @submit.prevent="checkForm">
                <div class="bg-success p-5">
                    <div class="mb-3">
                        <label for="text" class="form-label">login</label>
                        <input type="text" v-model.trim="form.login" class="form-control" :class="$v.form.login.$error ? 'is-invalid':''" id="text">
                        <p v-if="$v.form.login.$dirty && !$v.form.login.required" class="invalid-feedback">
                            Обязательное поле
                        </p>
                        <p v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="invalid-feedback">
                            Здесь должно больше 5-и символов
                        </p>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" v-model.trim="form.password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" v-model.trim="form.email" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text text-dark">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="country" class="form-label">Страна проживания</label>
                        <select v-model="form.country" id="country" class="form-control">
                            <option v-for="(country,index) in countries" :key="index" :value="country.value">{{country.labe}}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="themes" class="form-label">Любимые темы:</label>
                        <select v-model="form.favoiriteThemes" id="themes" class="form-control" multiple>
                            <option v-for="(theme,index) in themes" :key="index" :value="theme.value">{{theme.label}}</option>
                        </select>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" value='1' class="form-check-input" v-model='form.agreeWithSendEmail' id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out 1</label>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" value='2' class="form-check-input" v-model='form.agreeWithSendEmail' id="exampleCheck2">
                        <label class="form-check-label" for="exampleCheck2">Check me out 2</label>
                    </div>
                    <div class="border col-12">
                        <div class="form-check">
                            <input class="form-check-input" value='male' type="radio" name="flexRadioDefault" id="male" v-model="form.gendere">
                            <label class="form-check-label" for="male">
                                Мужчина
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" value='female' type="radio" name="flexRadioDefault" id="female" v-model="form.gendere">
                            <label class="form-check-label" for="female">
                                Женщина
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
       </div>
    </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name:'signUp',
    mixins:[validationMixin],
    data() {
        return {
            form:{
                login:'',
                password:'',
                email:'',
                country:'France',
                favoiriteThemes: ['IT'],
                agreeWithSendEmail: [],
                gendere: 'male',
            },
            countries: [
              {
                label:'Russia',
                value:'Russia'
              },
              {
                label:'Armenia',
                value:'Armenia'
              },
              {
                label:'France',
                value:'France'
              }
            ],
            themes:[//massiv
                {
                    label:"Технологии",  //object
                    value:"IT",
                },
                {
                    label:"Языки",  //object
                    value:"languages",
                },
                {
                    label:"Математика",  //object
                    value:"mathematics",
                },
            ]
        }
    },
    validations:{
        form: {
            login:{required, minLength: minLength(5)},
            email:{required, email},
            password:{required},
        },
    },
    methods: {
        checkForm(){
            this.$v.form.$touch()
            if(!this.$v.form.error){
                console.log('error');
            }
        },
    },      
}
</script>