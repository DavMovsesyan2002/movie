import VueRouter from 'vue-router'

import AllFilmsPage from '../pages/AllFilmsPage';
import MainPage from '../pages/MainPage';
import FilmPage from '../pages/FilmPage';
import NotFound from '../pages/404';
import FilmsLayout from '../pages/FilmsLayout';
import Account from '../components/account'

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            name:'main',
            component: MainPage,
        },
        {
            path: '/films',
            name: 'filmsLayout',
            component: FilmsLayout,
            children:[
                {
                    path: '',
                    name: 'films',
                    component: AllFilmsPage,
                },
                {
                    path: '/account',
                    name:'account',
                    component: Account,
                },
                {
                    path: ':id',
                    name: 'filmPage',
                    component: FilmPage,
                    beforeEnter: (to, from, next) => {
                        // if(localStorage.getItem('auth')){
                            next();
                        // }else{
                        //     next({name:'films'})
                        // }
                      }
                },
                {
                    path: ':genre',
                    name: 'genre',
                    component: AllFilmsPage,
                    beforeEnter: (to, from, next) => {
                        if(localStorage.getItem('auth')){
                            next();
                        }else{
                            next({name:'films'})
                        }
                      }
                },
                {
                    path:'*/*',
                    redirect:{ name:'films' }
                },
            ]
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound,
        },
    ],
})