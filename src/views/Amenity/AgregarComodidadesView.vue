<template>
    <main class="home-page">
        <h1>Agregar</h1>
        <div>
<form>

    <div class="form-group"> <!-- Full Name -->
        <label for="full_name_id" class="control-label">Titulo</label>
        <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="">
    </div>    

    <div class="form-group"> <!-- Street 1 -->
        <label for="street1_id" class="control-label">Descripcion</label>
        <input type="text" class="form-control" id="street1_id" name="street1" placeholder="">
    </div>                    
                                

    <div class="form-group"> <!-- City-->
        <label for="city_id" class="control-label">Imagen</label>
        <input type="text" class="form-control" id="city_id" name="city" placeholder="">
    </div>                                    
                            
    <div class="form-group"> <!-- State Button -->
        <label for="state_id" class="control-label">Estado</label>
        <select class="form-control" id="state_id">
        </select>                    
    </div>       
    <br>
    <div class="form-group"> <!-- Submit Button -->
        <button type="submit" class="btn btn-primary">Guardar</button>
    </div>     
    
</form>

</div>
    </main>
    </template>