<template>
    <div>
        
    </div>
</template>
<script>
export default {
    name:'LifeCycle',
    created(){
        //В хуке created вы сможете получить доступ к реактивным данным и активным событиям. Шаблоны и виртуальный DOM ещё не встроены (mounted) и не отрисованы.
        console.log("created");
    },
    beforeCreate() {
        //Хук beforeCreate выполняется прямо во время инициализации компонента. Данные ещё не стали реактивными, а события не настроены
        console.log("before Create");
    },
}
</script>