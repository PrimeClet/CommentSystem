<template>
    <div id="app">
        <header></header>
        <br>
        <main role="main" class="inner cover">
            <h1 class="cover-heading">Cover your page.</h1>
            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit
                the text, and add your own fullscreen background photo to make it your own.</p>
            <p class="lead">
                <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
            </p>
        </main>
        <br>
        <Footer></Footer>
    </div>
</template>

<script>
    import HelloWorld from './components/Home.vue'
    import Header from './components/Shared/Header'
    import Footer from './components/Shared/Footer'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Header,
            Footer
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
