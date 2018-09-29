import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tarefas from '@/pages/Tarefas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //Define a rota que deve ser acessada pelo browser
      name: 'HelloWorld', // dá o nome da rota
      component: HelloWorld // O Componente que deve ser "Injetado" Atualizado na página
    },
    {
      path: '/tarefas', 
      name: 'Tarefas', 
      component: Tarefas 
    }
  ]
})
