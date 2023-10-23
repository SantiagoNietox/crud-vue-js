<template>
    <div class="container">
        
 

        <div class="card">
            <div class="card-header">
                Empleados
            </div>
            <div class="card-body">


                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="empleado in empleados" :key="empleado.id">
                            <td scope="row">{{ empleado.id }}</td>
                            <td>{{ empleado.nombre }}</td>
                            <td>{{ empleado.correo }}</td>
                            <td>
                                <router-link :to="{name: 'edit', param:{id:empleado.id}}" class="btn btn-primary mx-1">Editar </router-link>
                                <button href="" class="btn btn-danger" type="button" v-on:click="deleteEmpleado(empleado.id)">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>


    </div>
</template>


<style>

</style>








<script>
export default {
    data() {
        return {
            empleados: []
        }
    },



    created: function () {

        this.consultarEmpleados();

    },
    methods: {

        consultarEmpleados() {


            fetch('http://localhost/empleados/')
                .then(respuesta => respuesta.json())
                .then((datosRespuesta) => {
                    console.log(datosRespuesta)
                    this.empleados = []
                    if (typeof datosRespuesta[0].success === 'undefined') {
                        this.empleados = datosRespuesta
                    } else {
                        this.empleados.push(datosRespuesta)
                    }

                })
                .catch(console.log)

        },

        deleteEmpleado(id){
            fetch('http://localhost/empleados/?borrar='+id)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    alert('Borrado con exito')
                    window.location = "/show"
                })
                .catch(error => console.error('Error:', error));
           
        },

        editarEmpleado(id){
            fetch('http://localhost/empleados/?editar='+id)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    alert('')
                    window.location = "/show"
                })
                .catch(error => console.error('Error:', error));
           
        }



    }
}
</script>