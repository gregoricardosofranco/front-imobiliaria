<script>
import Carousel from './Carousel.vue'
export default {
    props: ['id', 'tipo', 'valor', 'cidade', 'bairro', 'quartos', 'metros', 'garagens'],
    components: { Carousel },
   
}
</script>
<template>
    <div class="col">
    <RouterLink :to="'/detalhes/'+id ">
        <div class="card m-2 shadow-sm  bg-body rounded">
         <Carousel :index= id />
            <div class="card-body">
                <div class="valor">R${{ valor }}</div>
                <h5 class="card-title"></h5>
                <p class="card-text">
                    <p>{{ tipo }}</p>
                    <i class="bi bi-pin-map-fill"></i>
                    {{ bairro }}, {{ cidade }}
                </p>
                <p class="card-text"
                >Quartos : {{ quartos }}, Metro²: {{ metros }}, Garagens: {{ garagens }}</p>
            </div>
        </div>
    </RouterLink> 
    </div>
</template>

<style scoped>
.valor {
    background: #00c795;
    width: 60%;
    color: #fff;
    margin-left: -16px;
    text-align: center;
    padding: 10px;
}
</style>