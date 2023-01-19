<template>
    <main class="home-page">
        <h1>Agregar categoría</h1>
        <div>
            <form>

                <div class="form-group"> <!-- Full Name -->
                    <label for="full_name_id" class="control-label">Title</label>
                    <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="" v-model="form.title" >
                </div>                               
                                        
                <div class="form-group"> <!-- Full Name -->
                    <label for="full_name_id" class="control-label">Description</label>
                    <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="" v-model="form.description" >
                </div>
                
                <div class="form-group">
                    <label for="street1_id" class="control-label">Imagen</label>
                    <input type="file" class="form-control" id="street1_id" name="street1" placeholder="">
                </div>
                
                <div class="form-group"> <!-- Full Name -->
                    <label for="full_name_id" class="control-label">Estatus</label>
                    <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="" v-model="form.status" >
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
                categoryId: null,
                form: {
                    "title": "",
                    "description": "",
                    "icon_image": "",
                    "status": "",
                    
                },
            }
        },
        methods:{
            guardar(){
                axios.post('/v1/categories',this.form)
                .then(response => {
                    console.log(response);
                    this.$router.push('/categorias');
                })
                console.log(this.form)
            }
        },
    }
</script>