<template>
    <main class="home-page">
        <h1>Agregar estado/departamento</h1>
        <div>
            <form>

                <div class="form-group"> <!-- Full Name -->
                    <label for="full_name_id" class="control-label">Pais</label>
                    <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="" v-model="form.country_id" >
                </div>    

                <div class="form-group"> <!-- Street 1 -->
                    <label for="street1_id" class="control-label">Nombre Departamento</label>
                    <input type="text" class="form-control" id="street1_id" name="street1" placeholder="" v-model="form.name" >
                </div>                    

                <div class="form-group"> <!-- City-->
                    <label for="city_id" class="control-label">Codigo</label>
                    <input type="text" class="form-control" id="city_id" name="city" placeholder="" v-model="form.code" >
                </div>
                
                <div class="form-group"> <!-- City-->
                    <label for="state_id" class="control-label">Estado</label>
                    <input type="text" class="form-control" id="state_id" name="city" placeholder="" v-model="form.status" >
                </div>
                                        
                <!-- <div class="form-group"> 
                    <label for="state_id" class="control-label">Estado</label>
                    <select class="form-control" id="state_id">
                    </select>                    
                </div>        -->
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
                    "country_id": "",
                    "name": "",
                    "code": "",
                    "status": "",
                },
            }
        },
        methods:{
            guardar(){
                axios.post('/v1/states',this.form)
                .then(response => {
                    console.log(response);
                    this.$router.push('/Departamentos');
                })
                console.log(this.form)
            }
        },
    }
</script>