<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Empleado:
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre:</label>
                        <input type="name" class="form-control" id="Name" v-model="empleado.nombre">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo:</label>
                        <input type="name" class="form-control" id="email" v-model="empleado.email">
                    </div>
                    <div class="btn-group mt-3" role="group" style="">
                        <button type="submit" class="btn btn-primary mx-1">Editar</button>
                        <button type="button" class="btn btn-secondary mx-1">Cancelar</button>
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
            empleado: {}
        },
            created: function() {

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

            }

        }
    }
}

</script>