<template>
    <main class="home-page">
        <h1>Agregar país</h1>
        <div>
            <form>

                <div class="form-group"> <!-- Full Name -->
                    <label for="full_name_id" class="control-label">Nombre</label>
                    <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="" v-model="form.name" >
                </div>                               
                                        
                <div class="form-group"> <!-- Full Name -->
                    <label for="full_name_id" class="control-label">Codigo</label>
                    <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="" v-model="form.code" >
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
            countryId: null,
            form: {
                "name": "",
                "code": "",
                "status": "",    
            },
        }
    },
    methods:{
        guardar(){
            axios.post('/v1/countries',this.form)
            .then(response => {
                console.log(response);
                this.$router.push('/paises');
            })
            console.log(this.form)
        }
    },
}
</script>