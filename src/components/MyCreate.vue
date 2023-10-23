<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Empleado: {{ empleado.nombre  }}
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="registrarEmpleado">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre:</label>
                        <input type="name" class="form-control" id="Name" placeholder="Ingresa tu Nombre" v-model="empleado.nombre">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo:</label>
                        <input type="name" class="form-control" id="email" placeholder="Ingresa tu Correo" v-model="empleado.correo">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password:</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="empleado.password">
                    </div>
                    <div class="btn-group mt-3" role="group" style="">
                        <button type="submit" class="btn btn-primary mx-1">Registar</button>
                        <router-link :to="{name: 'show'}" class="btn btn-secondary mx-1">Cancelar </router-link>
                        
                    </div>

                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            empleado: {
                nombre: '',
                correo: '',
                password: ''
            }
        }
    },
    methods: {
        registrarEmpleado() {

            let enviarData = {
                nombre: this.empleado.nombre,
                correo: this.empleado.correo,
                password: this.empleado.password
            }
            fetch('http://localhost/empleados/?insertar=1', {
                    method: 'POST',
                    body: JSON.stringify(enviarData),
                })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    alert('Empleado Registrado')
                    window.location = "/show"
                })
                .catch(error => console.error('Error:', error));
        }
    }



}


</script>