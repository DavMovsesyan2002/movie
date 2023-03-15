<template>
  <div>
    <div class="position-relative">
      <header class="topbar">
        <div class="container">
          <div class="row">
            <!-- social icon-->
            <div class="col-sm-12">
              <ul class="social-network">
                <li>
                  <a class="waves-effect waves-dark" href="#"
                    ><i class="fab fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a class="waves-effect waves-dark" href="#"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a class="waves-effect waves-dark" href="#"
                    ><i class="fab fa-linkedin"></i
                  ></a>
                </li>
                <li>
                  <a class="waves-effect waves-dark" href="#"
                    ><i class="fab fa-pinterest"></i
                  ></a>
                </li>
                <li>
                  <a class="waves-effect waves-dark" href="#!"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <nav class="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
        <div class="container">
          <a
            class="navbar-brand fontSize30"
            rel="nofollow"
            target="_blank"
            href="http://scadonsak.com/7bF"
            style="text-transform: uppercase"
          >
            FILM.COM</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarResponsive">
            <ul class="navbar-nav navbar-nav-2 ml-auto">
              <li class="nav-item active">
                <router-link class="nav-link" :to="{ name: 'main' }"
                  >Cinema<span class="sr-only">(current)</span></router-link
                >
              </li>
<!--              <li class="nav-item">-->
<!--                <router-link class="nav-link" :to="{ name: 'films' }">Фильмы</router-link>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <router-link class="nav-link" :to="{ name: 'films' }"-->
<!--                  >Сериалы</router-link-->
<!--                >-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#">Мультфильмы</a>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#">Новости</a>-->
<!--              </li>-->

              <li class="nav-item marginLeft d-flex justify-center col-3">
                <b-button
                  @click="showModal"
                  class="btn btn-design btn-outline-light btn-floating btn-lg"
                >
                  {{ auth ? "Exit" : "Sign in" }}
                </b-button>
              </li>
              <li>
                <div class="user-rounded marginLeft">
                  <router-link :to="{ name: 'account' }">
                    <img
                        src="../../public/img/male-user.png"
                        alt="user"
                        class="rounded-circle"
                    />
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <b-modal
      hide-footer
      hide-header
      ref="modal-1"
      centered
      size="lg"
      title="BootstrapVue"
    >
      <div class="p-4" v-if="!signBool">
        <div v-if="!auth">
          <div class="h1">{{ auth ? "Exit" : "Sign in" }}</div>
          <div class="col-12 mt-3 mb-5">
            <button class="btn btn-outline-danger" @click="sign">
              {{ signBool ? "Sign in" : "Sign up" }}
            </button>
          </div>
          <div class="col-12 bg-danger p-2 mb-2 text-white" v-if="errors">
            {{ errors }}
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="login" class="h4">Login</label>
              <input
                type="text"
                v-model="user_name"
                id="login"
                class="form-control col-10 mt-4"
              />
            </div>
            <div class="form-group mt-3">
              <label for="password" class="h4">Password</label>
              <input
                id="password"
                type="password"
                v-model="user_pswd"
                class="form-control col-10 mt-4"
              />
            </div>
          </div>
        </div>
        <div v-else>
          <div class="h2">Are you sure</div>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <b-button class="mt-3 col-4 btn btn-danger btn-lg" block @click="hideModal"
            >Close</b-button
          >
          <b-button class="mt-3 col-4 btn btn-danger btn-lg" block @click="signIn">{{
            auth ? "Exit" : "Sign in"
          }}</b-button>
        </div>
      </div>
      <div class="p-4" v-else>
        <div class="h1">Create an account</div>
        <div class="col-12 mt-3 mb-5">
          <button class="btn btn-outline-danger" @click="sign">
            {{ signBool ? "Sign" : "Sign up" }}
          </button>
        </div>
        <div class="col-12 bg-danger p-2 mb-2 text-white" v-if="errors">
          {{ errors }}
        </div>
        <div class="col-12 bg-success p-2 mb-2 text-white" v-if="congratulations">
          Congratulations
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="login" class="h6">Login</label>
            <input
              type="text"
              v-model="signUpUser"
              id="login"
              class="form-control col-10"
            />
          </div>
          <div class="form-group mt-3">
            <label for="password" class="h6">Password</label>
            <input
              id="password"
              type="password"
              v-model="signUpPswd"
              class="form-control col-10"
            />
          </div>
          <div class="form-group mt-3">
            <label for="password" class="h6">Repeat Password</label>
            <input
              id="password"
              type="password"
              v-model="signUpPswdRepeat"
              class="form-control col-10"
            />
          </div>
        </div>
        <div class="col-12">
          <button @click="signUp" class="btn btn-danger mt-3">Registration</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "header",
  data() {
    return {
      signUpUser: null,
      signUpPswdRepeat: null,
      signUpPswd: null,
      user_name: null,
      user_pswd: null,
      signBool: false,
      auth: false,
      errors: null,
      congratulations: false,
    };
  },
  created() {
    this.auth = localStorage.getItem("auth") !== null;
  },
  methods: {
    showModal() {
      this.$refs["modal-1"].show();
    },
    hideModal() {
      this.$refs["modal-1"].hide();
    },
    sign() {
      this.signBool = !this.signBool;
    },
    signUp() {
      this.congratulations = false;
      this.errors = null;
      if (this.signUpPswd && this.signUpPswdRepeat && this.signUpUser) {
        if (this.signUpPswd === this.signUpPswdRepeat) {
          localStorage.setItem("auth", true);
          localStorage.setItem("user", this.signUpUser);
          localStorage.setItem("pass", this.signUpPswd);
          this.errors = "";
          this.congratulations = true;
        } else {
          this.errors = "The password is wrong";
        }
      } else {
        this.errors = "The fields is required";
      }
    },
    signIn() {
      this.errors = null;
      if (this.auth) {
        // localStorage.removeItem("user", this.user_name);
        // localStorage.removeItem("pass", this.user_pswd);
        localStorage.removeItem("auth");
        this.$router.push({ name: "main" });
      } else {
        if (
          this.user_name === localStorage.user &&
          this.user_pswd === localStorage.pass
        ) {
          this.auth = true;
          this.$refs["modal-1"].hide();
        } else {
          this.errors = "The fields is wrong";
        }
      }
    },
  },
};
</script>
<style lang="scss">
.user-rounded {
  width: 60px;
  height: 60px;
}
.user-rounded img {
  width: 100%;
  height: 100%;
}
.navbar {
  height: 100px;
}
</style>
