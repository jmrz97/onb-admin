<template>
    <main class="home-page">
        <h1>Agregar ciudad</h1>
        <div>
            <form>

                <div class="form-group"> <!-- Full Name -->
                    <label for="full_name_id" class="control-label">Departamento</label>
                    <input type="number" class="form-control" id="full_name_id" name="full_name" placeholder="" v-model="form.state_id">
                </div>    

                <div class="form-group"> <!-- Street 1 -->
                    <label for="street1_id" class="control-label">Nombre</label>
                    <input type="text" class="form-control" id="street1_id" name="street1" placeholder="" v-model="form.name">
                </div>                                             
                                        
                <div class="form-group"> <!-- Street 1 -->
                    <label for="street1_id" class="control-label">Estado</label>
                    <input type="text" class="form-control" id="street1_id" name="street1" placeholder="" v-model="form.status">
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
                    "state_id": "",
                    "name": "",
                    "status": "",
                    
                },
            }
        },
        methods:{
            guardar(){
                axios.post('/v1/cities',this.form)
                .then(response => {
                    console.log(response);
                    this.$router.push('/ciudades');
                })
                console.log(this.form)
            }
        },
    }
</script>