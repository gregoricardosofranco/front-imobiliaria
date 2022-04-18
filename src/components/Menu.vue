<script>
export default {
  name: "Menu",
  data() {
    return {
      menus: [
        { descricao: 'Home', link:"/" },
        { descricao: 'Buscar Imóveis', link:"/buscar-imoveis" },
      ],
    }
  }
}

</script>
<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
  <a class="navbar-brand" href="#"> <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <div class="nav-item nav-link active" href="#" v-for="menu in menus" :key="menu.id" >
        <RouterLink :to=menu.link>{{menu.descricao}}</RouterLink> 
      </div>
    </div>
  </div>
</div>
</nav>
</template>
<style scoped>

</style>