<template>
  <div id="app">
    <!--<Input />-->
    <!--<UseCard />-->
    <!--<Task/>-->
    <!--<PhotoRedactor/>-->
    <!-- <UsersSearch/>--> 
    <!-- <ProductList/> -->
    <!--<UserForm />-->
    <!-- <SignUp/>  -->
    <!-- <UserPage /> -->
    <!-- <LifeCycle /> -->
    <!-- <MainPage /> -->
    <!-- <UserPage /> -->
    <!-- <AllFilmsPage /> -->
    <!-- <TextEditor /> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/footer";

//import Input from './components/input.vue'
//import UseCard from './components/useCard'
//import Task from './components/Task.vue'
//import PhotoRedactor from './components/photoRedactor'
//import UsersSearch from './components/usersSearch'
// import ProductList from './components/productList'
//import UserForm from './components/UserForm'
// import SignUp from './components/signUp'
// import AllFilmsPage from './pages/AllFilmsPage';
// import UserPage from './components/userPage'
// import LifeCycle from './components/LifeCycle'
// import MainPage from './pages/MainPage';  //about film
// import TextEditor from './components/textEditor';

export default {
  name: 'App',
  components: {
    Footer,
    //Input,
    //UseCard,
    //Task,
    //PhotoRedactor,
    //UsersSearch,
    // ProductList,
    // UserForm,
    // SignUp,
    // UserPage,
    // LifeCycle,
    // MainPage,
    // AllFilmsPage,
    // TextEditor,
  }
}
</script>