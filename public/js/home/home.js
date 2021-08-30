Vue.use(VueRouter);

/*PÁGINAS*/
const HomePage = httpVueLoader('/public/new/pages/index.vue');
const ComoComprarPage = httpVueLoader('/public/new/pages/help_comprar.vue');
const ComoUsarPage = httpVueLoader('/public/new/pages/help_usar.vue');
const PreguntasFrecuentesPage = httpVueLoader('/public/new/pages/help_question.vue');
const ContactoPage = httpVueLoader('/public/new/pages/help_contacto.vue');

/*COMPONENTES*/
const HeaderComponent = httpVueLoader('/public/new/Components/navbar.vue');
const FooterComponent = httpVueLoader('/public/new/Components/Footer.vue');

const routes = [
    {path: '/', component: HomePage},
    {path: '/como-comprar', component: ComoComprarPage},
    {path: '/como-usar', component: ComoUsarPage},
    {path: '/preguntas-frecuentes', component: PreguntasFrecuentesPage},
    {path: '/contacto', component: ContactoPage},
];

const router = new VueRouter({
    routes
});

const LandingHome = new Vue({
    el: "#LandingApp",
    router: router,
    components: {
        "header-component": HeaderComponent,
        "footer-component": FooterComponent,
    }
});