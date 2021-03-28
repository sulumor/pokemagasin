<template>
    <table>
        <thead>
            <th>Nom de Famille</th>
        </thead>
        <tbody v-bind:key = 'index' v-for="(index,guest) in guests">
            <td>{{ guest.last_name }}</td>
        </tbody>
    </table>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Tableau',
        data(){
            return {
                guests: []
            }
        },
        mounted: function(){
            this.getGuests()
        },
        methods: {
            getGuests(){
                
                axios
                    .get('http://127.0.0.1/Nouveau dossier/contacts.php')
                    .then(function(response){
                        this.guests = response;
                    })
                    .catch(function(err){
                        console.log(err);
                    })

            }
        }
    }

</script>

<style>

</style>