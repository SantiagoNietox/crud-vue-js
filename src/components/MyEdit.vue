<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Empleado:
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="updateData">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre:</label>
                        <input type="name" class="form-control" id="Name" v-model="empleado.nombre" required>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo:</label>
                        <input type="email" class="form-control" id="email" v-model="empleado.correo" required>
                    </div>
                    <div class="btn-group mt-3" role="group" style="">
                        <button type="submit" class="btn btn-primary mx-1">Editar</button>
                        <router-link :to="{ name: 'show' }" class="btn btn-secondary mx-1">Cancelar </router-link>
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
        }
    },
    created: function () {
        this.getInformation();

    },
    methods: {
        getInformation() {
            fetch('http://localhost/empleados/?consultar=' + this.$route.params.id)
                .then(respuesta => respuesta.json())
                .then((datosRespuesta) => {
                    console.log(datosRespuesta);
                    this.empleado = datosRespuesta[0];
                })
                .catch(error => console.log(error));
        },
        updateData() {
            var enviarData = {
                nombre: this.empleado.nombre,
                correo: this.empleado.correo,
                id: this.$route.params.id

            }
            console.log(enviarData);
            fetch('http://localhost/empleados/?actualizar=1', {
                method: 'POST',
                body: JSON.stringify(enviarData),
            })
                .then(respuesta => respuesta.json())

            // console.log(datosRespuesta)
            window.location.href = "../show";
        }



    }
}




</script>