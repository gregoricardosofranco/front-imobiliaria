<script setup>
defineProps({
  titulo: {
    type: String,
    required: true,
  },
});
</script>
<template>

  <div class="card shadow-sm p-3 mb-5 bg-body rounded">
    <div class="card-body">
      <h1 class="card-title">{{ titulo }}</h1>
        <div class="btn-group pt-4" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck1">Alugar</label>
            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck2">Comprar</label>
        </div>
      <hr>
        <div>
            <label for="formCidade" class="form-label">Cidade</label>
            <input class="form-control form-control-lg" id="formCidade" type="text">
        </div>
        <div>
            <label for="formBairro" class="form-label">Bairro</label>
            <input class="form-control form-control-lg" id="formBairro" type="text">
        </div>
        <div class="row">
            <div class="col-md-6"> 
                <label for="formCidade" class="form-label">Valor do Aluguel</label>
                <input class="form-control form-control-lg" id="formCidade" type="text">
            </div>
            <div class="col-md-6">
                <label for="formCidade" class="form-label">Quartos</label>
                <input class="form-control form-control-lg" id="formCidade" type="text">
            </div>
        </div>
        <div class="d-grid pt-4">
            <button class="btn btn-primary" type="button">Buscar Imóveis</button>
           
        </div>
    </div>
  </div>

</template>
<style scoped>
*{
    text-align: left;
}

</style>