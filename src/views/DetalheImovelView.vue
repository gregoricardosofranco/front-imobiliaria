<script >
import BuscaHome from "@/components/BuscaHome.vue"
import Imoveis from "@/components/Imoveis.vue"
import Filtro from "@/components/Filtro.vue"
import Contato from "@/components/Contato.vue"
import Carousel from "@/components/Carousel.vue"
import Spinner from "@/components/Spinner.vue"
import Api from "@/service/api.js"

export default {
    name: "DetalhesImovel",
    components: {
        Imoveis,
        BuscaHome,
        Filtro,
        Spinner,
        Contato,

        Carousel
    },
    data() {
        return {
            imoveis: {},
            loading: true,
            id: this.$route.params.id
        }
    },
    mounted() {

        Api.get('imoveis/' + this.id)
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
    <Spinner :loading="loading" class="container" />
    <div class="container pt-3" v-if="!loading">
        <div class="row">
            <div class="col-md-8">
                <Carousel />
            </div>
            <div class="col-md-4">
                <div class="md-12 pb-2">
                    <div class="card">
                        <div class="card-body">
                            <p class="fs-4">Valor: R$ {{ imoveis.valor }}</p>
                            <h4>{{ imoveis.cidade }} - {{ imoveis.bairro }}</h4>
                            <p>{{ imoveis.rua }} - {{ imoveis.numero }}</p>
                        </div>
                    </div>
                </div>
                <div class="md-12">
                    <div class="card">
                        <div class="card-body">
                            <Contato />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-3">
            <div class="md-12">
                <div class="card">
                    <div class="card-body">
                        <h4>Descrição</h4>
                        <p>{{ imoveis.descricao }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-3">
            <h4>+ Detalhes</h4>
            <div class="col-md-2">
                <div class="card">
                    <div class="card-body">
                        <p>Quartos: {{ imoveis.qtd_quartos }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card">
                    <div class="card-body">
                        <p>Suites: {{ imoveis.qtd_suites }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card">
                    <div class="card-body">
                        <p>Banheiro: {{ imoveis.qtd_suites }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card">
                    <div class="card-body">
                        <p>Garagens: {{ imoveis.qtd_garagens }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card">
                    <div class="card-body">
                        <p>M²: {{ imoveis.metro_quadrado }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>