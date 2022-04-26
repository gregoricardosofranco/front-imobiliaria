<script>
export default {
    name: "SpinnerImovel",
    data() {
        return { numero: 12 }
    },
    props: ['loading', 'quantidade'],
    methods: {
        divisao() {
            this.numero = 12 / this.quantidade
        }
    },
    created() {
        this.divisao()
    }
}
</script>

<template>
    <div :class="'col-md-' + numero" v-for="n in quantidade" v-if="loading">
        <div class="card" aria-hidden="true">
            <img src="@/assets/image-not-found.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
               
            </div>
        </div>
    </div>
</template>