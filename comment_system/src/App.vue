<template>
    <div id="app1" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <br/>
        <Header></Header>
        <br>
        <main role="main" class="inner cover">
            <h1 class="cover-heading">Comment System</h1>
            <p class="lead">
                Examen critique du contenu et de la forme d'un texte documentaire ou littéraire, en vue d'une lecture
                plus pénétrante de ce texte.
                Interjection, souvent formulée en incise, qui tend à exprimer la stupeur, la colère, comme si le
                locuteur était dans l'impossibilité de mettre à jour ses sentiments ou méprisait de le faire
            </p>
            <p class="lead">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-lg btn-primary" data-toggle="modal"
                        data-target="#exampleModalCenter">
                    Comment Something !
                </button>
                <Modal></Modal>
            </p>
        </main>
        <br>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header'
    import Footer from './components/Shared/Footer'
    import Modal from "./components/Shared/Modal"
    import Store from "./Store/store"

    export default {
        name: 'App',
        Store,
        components: {
            Modal,
            Header,
            Footer
        }
    }
</script>

<style>
    /* Links */
    a,
    a:focus,
    a:hover {
        color: #fff;
    }

    /* Custom default button */
    .btn-secondary,
    .btn-secondary:hover,
    .btn-secondary:focus {
        color: #333;
        text-shadow: none; /* Prevent inheritance from `body` */
        background-color: #fff;
        border: .05rem solid #fff;
    }

    /*
     * Base structure
     */

    html,
    body {
        height: 100%;
        background-color: #333;
    }

    body {
        display: -ms-flexbox;
        display: flex;
        color: #fff;
        text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
        box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
    }

    /*
     * Cover
     */
    .cover {
        padding: 0 1.5rem;
    }

    .cover .btn-lg {
        padding: .75rem 1.25rem;
        font-weight: 700;
    }

</style>
