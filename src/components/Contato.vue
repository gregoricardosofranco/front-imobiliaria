<script>
export default {
    name: "Contato"
}
</script>
<template>
    <form class="row g-3">
        <h3>Entre em contato</h3>
        <div class="col-md-12">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Nome</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Nome" />
        </div>
        <div class="col-6">
            <label for="inputAddress" class="form-label">Tefelefone</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Telefone" />
        </div>
        <div class="mb-12">
            <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    </form>
</template>