<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Login</label>
                            <input type="login" class="form-control" id="exampleInputEmail1"
                                   aria-describedby="loginHelp" placeholder="Enter login" v-model="login">
                            <small id="loginHelp" class="form-text text-muted">We'll never share your login with anyone
                                else.
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                   placeholder="Password" v-model="password">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-large btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" @click="IsInUsersDataArray(login, password)">Log In
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Store from "../../Store/store"
    // import Vuex from "vuex"
    import {mapGetters} from "vuex"

    export default {
        store: Store,
        name: "Modal",
        data() {
            return {
                login: "Login",
                password: "Password",
                test: "logo"
            }
        },
        computed: {
            ...mapGetters(['IsInUsersData']),
        },
        mounted() {
            console.log(this.IsInUsersData('hello')); // logs "hello"
        }
    }
</script>

<style scoped>
    .modal-content {
        color: black;
        text-align: left;
    }
</style>