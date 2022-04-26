<script>
import BuscaHome from "@/components/BuscaHome.vue";
import Imoveis from "@/components/Imoveis.vue";
import Filtro from "@/components/Filtro.vue";
import SpinnerImovel from "@/components/SpinnerImovel.vue";
import axios from 'axios';


export default {
  name: 'BuscarImoveisView',
  components: {
    Imoveis,
    BuscaHome,
    Filtro,
    SpinnerImovel

  },
  data() {
    return {
      info: [],
      loading: true
    }
  },
  mounted() {

    axios
      .get('http://127.0.0.1:8000/api/imoveis')
      .then(response => {
        this.info = response.data

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
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4">
        <BuscaHome titulo="Encontre um lar para chamar de seu!" />
      </div>
      <div class="col-md-8">
        <Filtro descricao="Resultado da sua busca" />
        <div class="row">
          <SpinnerImovel :loading="loading" :quantidade="2"/>
          <div class="col-md-6" v-for="(item,index) in info" :key="index">
            <Imoveis v-bind="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

