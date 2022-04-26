<script >
import BuscaHome from "@/components/BuscaHome.vue";
import Imoveis from "@/components/Imoveis.vue";
import Filtro from "@/components/Filtro.vue";
import Api from "@/service/api.js"
import SpinnerImovel from "../components/SpinnerImovel.vue";
export default {

    components: {
        Imoveis,
        BuscaHome,
        Filtro,
        SpinnerImovel
    },
    data() {
        return {
            imoveis: [],
            loading: true
        }
    },
    mounted() {
        Api
            .get('imoveis')
            .then(response => {
                this.imoveis = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
}
</script>
<template>
    <main role="main">
        <div class="home">
            <div class="container">
                <section class="jumbotron text-center">
                    <div class="row">
                        <div class="col-md-5">
                            <BuscaHome titulo="Encontre um lar para chamar de seu!" />
                        </div>
                        <div class="col-md-7"></div>
                    </div>
                </section>
            </div>
        </div>

        <div class="container pt-4">
            <Filtro descricao="Destaques" />
            <div class="row pt-3">
                <SpinnerImovel :loading="loading" :quantidade="4"/>
                <div class="col-md-3" v-for="imovel in imoveis" :key="imovel.id" v-show="imovel.destaque === 1">
                    <Imoveis v-bind="imovel"   />
                </div>
            </div>
        </div>
    </main>
</template>
<style>
.home {
    background: url("../assets/imovel.jpg") 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 5px;
}
:root {
    --jumbotron-padding-y: 3rem;
}

.jumbotron {
    padding-top: var(--jumbotron-padding-y);
    padding-bottom: var(--jumbotron-padding-y);
    margin-bottom: 0;
}
@media (min-width: 768px) {
    .jumbotron {
        padding-top: calc(var(--jumbotron-padding-y) * 2);
        padding-bottom: calc(var(--jumbotron-padding-y) * 2);
    }
}

.jumbotron p:last-child {
    margin-bottom: 0;
}

.jumbotron-heading {
    font-weight: 300;
}

.jumbotron .container {
    max-width: 40rem;
}

footer {
    padding-top: 3rem;
    padding-bottom: 3rem;
}

footer p {
    margin-bottom: 0.25rem;
}

.box-shadow {
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}
</style>
  