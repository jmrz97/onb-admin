<template>
    <main class="home-page">
        <h1>Paises</h1>
        <div class="row mt-4 mb-4 px-3">
            <div class="col-lg-4">
            </div>
            <div class="col-lg-8 d-flex justify-content-end">
                <button class="btn nuevo-airbnb d-flex justify-content-center">
                    <RouterLink to="/agregarpais" class="nav-link">
                        <h6 id="nuevo-airbnb-titulo">Agregar</h6>
                    </RouterLink>
                </button>
            </div>
        </div>
        <div>
            <table class="table border-top">
                <thead>
                    <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Codigo</th>
                        <th scope="col">Estado</th>
                        <th scope="col" class="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(countries, index) in countriesList" :key="countries.id">
                        <td>{{ index +1 }}</td>
                        <td>{{ countries.name }}</td>
                        <td>{{ countries.code }}</td>
                        <td>{{ countries.status }}</td>
                   
                        <td class="td-actions text-center">
                            <button type="button" rel="tooltip" class="btn btn-just-icon btn-sm" id="action-buttons">
                                <i class="fa-solid fa-circle-info"></i>
                            </button>
                            <button type="button" rel="tooltip" class="btn btn-just-icon btn-sm" id="action-buttons">
                                <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                            </button>
                            <button type="button" rel="tooltip" class="btn btn-just-icon btn-sm" id="action-buttons" v-on:click="eliminar(countries.id)">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                countriesList: null,
            }
        },
        async mounted() {
            axios.get('/v1/countries')
            .then(response => {
                this.countriesList = response.data.data;
                console.log(response);
            })
        },
        methods:{
            editar(id){
                this.$router.push('/editar/'+id);
                console.log(id);
            },
            eliminar(id){
                axios.delete('/v1/countries/'+id)
                .then(response => {
                    this.$router.push('/paises');
                    console.log(response);
                })
                console.log(id);
            }
        },
    }
</script>

<style scoped>
#section-icons {
    font-size: 20px;
    color: #8E2530;
    margin: 1rem;
}

.iconos-bandejas {
    margin-left: 0.5rem;
    color: #5B5452;
    font-size: 16px;
    font-weight: bold;
}

#contador-airbnb {
    font-size: 20px;
}

.nuevo-airbnb {
    width: 15%;
    height: 40px;
    background: #8E2530;
}

#nuevo-airbnb-titulo {
    padding: 3px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    font-family: Poppins !important;
}

.form {
    position: relative;
}

.form .fa-search {
    position: absolute;
    top: 30%;
    left: 12px;
    color: #5B5452;
}

.form-input {
    width: 100%;
    height: 12%;
    text-indent: 22px;
    border-radius: 10px;
}

.form-input:focus {
    box-shadow: none;
    border: 1px solid #5B5452;
}

#filtros-airbnb {
    width: 16%;
}

#filtros-airbnb:focus {
    border: 1px solid #5B5452;
    box-shadow: none;
}

.opcion-select-airbnb {
    font-family: Poppins, sans-serif !important;
    font-size: 16px;
    font-weight: 600;
}

tbody {
    vertical-align: middle;
}



#action-buttons {
    color: #8E2530;
    font-size: 18px;
}

.btn-close {
    color: #5B5452;
    font-weight: bolder;
}

.btn-secondary {
    background: #8E2530 !important;
}

.modal-title {
    font-weight: bold;
    font-family: Poppins;
}

.modal-header {
    border-bottom: 2px solid #d4d4d4;
}

.modal-footer {
    border-top: 2px solid #d4d4d4;
}
</style>