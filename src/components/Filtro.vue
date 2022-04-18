<script setup>
defineProps({
    descricao: {
        type: String,
        required: true
    }

})
</script>
<template>
    <div class="card shadow-sm p-3 mb-5 bg-body rounded">
        <div class="card-body">
            <div class="row">
                <div class="col-md-8">
                    <p class="pt-2">{{descricao}}</p>
                </div>
                <div class="col-md-2">
                    <p class="text-end pt-2">Filtrar por</p>
                </div>
                <div class="col-md-2">
                    <select class="form-select" aria-label="Filtrar por">
                        <option selected>Filtrar por</option>
                        <option value="1">Menor Valor</option>
                        <option value="2">Maior Valor</option>
                        <option value="3">Maior Area m²</option>
                        <option value="4">Menor Area m²</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>