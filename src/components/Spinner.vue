<script>
export default {
    name: "Spinner",
    props: ['loading', 'quantidade']
}
</script>

<template>
    <div v-if="loading">
        <div class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>