<template>
    <main class="home-page">
        <h1>Propiedades</h1>
        <div class="row mt-4 mb-4 px-3">
            <div class="col-lg-4">
            </div>
        </div>
        <div>
            <table class="table border-top">
                <thead>
                    <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Nombre</th>
                        <!-- <th scope="col">Descricpcion</th> -->
                        <th scope="col">Usuario</th>
                        <th scope="col">Tipo propiedad</th>
                        <th scope="col">Subcategoria</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Estado</th>
                        <th scope="col" class="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(properties, index) in propertiesList" :key="properties.id">
                        <td>{{ index +1 }}</td>
                        <td>{{ properties.name }}</td>
                        <!-- <td>{{ properties.description }}</td> -->
                        <td>{{ properties.author.email }}</td>
                        <td>{{ properties.category.title }}</td>
                        <td>{{ properties.subcategory.title }}</td>
                        <td>{{ properties.location.country }}</td>
                        <td>{{ properties.location.state }}</td>
                        <td>{{ properties.location.city }}</td>
                        <td>{{ properties.status }}</td>
                        <td class="td-actions text-center">
                            <button type="button" rel="tooltip" class="btn btn-just-icon btn-sm" id="action-buttons">
                                <i class="fa-solid fa-circle-info"></i>
                            </button>
                            <button type="button" rel="tooltip" class="btn btn-just-icon btn-sm" id="action-buttons">
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
                propertiesList: null,
            }
        },
        async mounted() {
            axios.get('/v1/properties')
            .then(response => {
                this.propertiesList = response.data.data;
                console.log(response);
            })
        },
        methods:{
            editar(id){
                this.$router.push('/editar/'+id);
                console.log(id);
            },
            eliminar(id){
                axios.delete('/v1/properties/'+id)
                .then(response => {
                    this.$router.push('/properties');
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