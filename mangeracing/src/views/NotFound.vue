<template>
    <main class="notfound-container flex justify-content-center align-items-center">
        <div class="content-box">
            <h1>Pagina não encontrada</h1>
            <img class="image-lizard" src="../assets/image/lizard-dance.gif" alt="Lizard Dance">
        </div>
    </main>
</template>

<style scoped lang="scss">
.notfound-container {
    margin-top: 10%;

    .content-box {
        background-color: var(--app-tertiary);
        padding: 15px 25px;
        text-align: center;
        
        h1 {
            color: white;
        }

        .image-lizard {
            max-width: 100%;
            height: auto;
        }
    }
}
</style>