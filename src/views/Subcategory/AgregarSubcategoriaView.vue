<template>
    <main class="home-page">
        <h1>Agregar subcategoría</h1>
        <div>
            <form>

                <div class="form-group"> <!-- Full Name -->
                    <label for="full_name_id" class="control-label">Categoria</label>
                    <input type="number" class="form-control" id="full_name_id" name="full_name" placeholder="" v-model="form.category_id">
                </div>    

                <div class="form-group"> <!-- Street 1 -->
                    <label for="street1_id" class="control-label">Titulo</label>
                    <input type="text" class="form-control" id="street1_id" name="street1" placeholder="" v-model="form.title">
                </div>                    
                                                                    
                <div class="form-group"> <!-- Street 1 -->
                    <label for="street1_id" class="control-label">Descripción</label>
                    <input type="text" class="form-control" id="street1_id" name="street1" placeholder="" v-model="form.description">
                </div>        
                <br>
                <div class="form-group"> <!-- Submit Button -->
                    <button type="button" class="btn btn-primary" v-on:click="guardar()">Guardar</button>
                </div>     
                
            </form>

        </div>
    </main>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                countryId: null,
                form: {
                    "category_id": "",
                    "title": "",
                    "description": "",
                    
                },
            }
        },
        methods:{
            guardar(){
                axios.post('/v1/subcategories',this.form)
                .then(response => {
                    console.log(response);
                    this.$router.push('/subcategoria');
                })
                console.log(this.form)
            }
        },
    }
</script>