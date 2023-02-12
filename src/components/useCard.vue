<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img src="../../public/img/TomXardi.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{getAuthorFullName}}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div>
            <div class="col-12"><p>Участников {{users.length}}</p></div>
                <ul>
                    <li v-for='(user,index) in users' :key="index">
                        {{`${index + 1} ${getFullName(user)}` }}                  
                    </li>
                </ul>
                <ul>
                    <li v-for='(value,key,index) in users[0]' :key="index">
                       {{index+1}}) {{key}} - {{value}}     
                    </li>
                </ul>
                <button class="btn btn-danger" @click="currentPage--">Пред.</button>
                <button class="btn btn-danger ms-2" v-for="page in pages" :key="page"  @click="currentPage = page">
                    {{page}}
                </button>
                <button class="btn btn-danger ms-2" @click="currentPage++">След.</button>
                <p>Страница {{currentPage}} из {{pages}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'UseCard',
    data(){
        return{
            firstName:'Том',
            lastName:'Харди',
            users: [
                {
                    firstName:'Леонардо',
                    lastName:'Ди Каприо',
                },
                {
                    firstName:'Брэт',
                    lastName:'Питт',
                }
            ],
            pages:3,
            currentPage:1,
        }
    },
    computed:{
        getAuthorFullName(){
            return `${this.firstName} ${this.lastName}`.toUpperCase()
        }
    },
    methods: {
        getFullName(user){
            return `${user.firstName} ${user.lastName}`;
        },
        loadUsers(page){
            console.log(`Загрузка пользователей: страница ${page}`);
        },
    },
    watch:{
        currentPage(newValue/*,oldValue*/){
            this.loadUsers(newValue)
        }
    }
}
</script>