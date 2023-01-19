import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Dashboard/HomeView.vue'
import AboutView from '../views/Dashboard/AboutView.vue'
import CategoriaView from '../views/Category/CategoriaView.vue'
import PaisesView from '../views/Country/PaisesView.vue'
import DepartamentoView from '../views/State/DepartamentoView.vue'
import CiudadesView from '../views/City/CiudadesView.vue'
import SubcategoriaView from '../views/Subcategory/SubcategoriaView.vue'
import PropiedadesView from  '../views/Property/PropiedadesView.vue'
import ComodidadesView from '../views/Amenity/ComodidadesView.vue'
import AgregarPaisView from '../views/Country/AgregarPaisView.vue'
import AgregarCiudadView from '../views/City/AgregarCiudadView.vue'
import AgregarCategoriaView from '../views/Category/AgregarCategoriaView.vue'
import AgregarDepartamentoView from '../views/State/AgregarDepartamentoView.vue'
import AgregarSubcategoriaView from '../views/Subcategory/AgregarSubcategoriaView.vue'
import AgregarPropiedadView from '../views/Property/AgregarPropiedadView.vue'
import AgregarComodidadesView from '../views/Amenity/AgregarComodidadesView.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api/'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: AboutView
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriaView
    },
    {
      path: '/paises',
      name: 'paises',
      component: PaisesView
    },
    {
      path: '/departamentos',
      name: 'Departamentos ',
      component: DepartamentoView
    },
    {
      path: '/ciudades',
      name: 'ciudades',
      component: CiudadesView
    },
    {
      path: '/subcategoria',
      name: 'subcategoria',
      component: SubcategoriaView
    },
    {
      path: '/propiedades',
      name: 'propiedades',
      component: PropiedadesView
    },
    {
      path: '/comodidades',
      name: 'comodidades',
      component: ComodidadesView
    },
    {
      path: '/agregarpais',
      name: 'agregarpais',
      component: AgregarPaisView
    },
    {
      path: '/agregarciudad',
      name: 'agregarciudad',
      component: AgregarCiudadView
    },
    {
      path: '/agregarcategoria',
      name: 'agregarcategoria',
      component: AgregarCategoriaView
    },
    {
      path: '/agregardepartamento',
      name: 'agregardepartamento',
      component: AgregarDepartamentoView
    },
    {
      path: '/agregarsubcategoria',
      name: 'agregarsubcategoria',
      component: AgregarSubcategoriaView
    },
    {
      path: '/agregarpropiedad',
      name: 'agregarpropiedad',
      component: AgregarPropiedadView
    },
    {
      path: '/agregarcomodidades',
      name: 'agregarcomodidades',
      component: AgregarComodidadesView
    }

  ]
})

export default router
