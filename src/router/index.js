import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeImobiliaria.vue'
import DetalheImovelView from '../views/DetalheImovelView.vue'
import BuscarImoveisView from '../views/BuscarImoveisView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detalhes/:id',
      component: DetalheImovelView
    },
    {
      path: '/buscar-imoveis',
      component: BuscarImoveisView
    },
  ]
})

export default router
