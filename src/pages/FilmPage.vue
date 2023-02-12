<template>
  <div>
    <div class="container">
      <div class="film-page">
        <div class="text-white mt-4">
          <div class="col-12 d-flex justify-content-between">
            <div class="col-4">
              <h1>{{ film.title }}</h1>
              <img
                width="100%"
                height="333px"
                class="mt-2 mb-2"
                :src="'/img/' + film.img"
              />
            </div>
            <div class="col-7 pt-5">
              <div class="h1">Кадры</div>
              <div class="col-12 mt-5">
                <div class="images-wrapper">
                  <img
                    v-for="frame in film.frames"
                    v-bind:key="frame"
                    v-bind:src="'/img/' + frame"
                    class="image"
                  />
                </div>
              </div>
              <modal v-if="showModal" @close="showModal = false">
                <h3 slot="header">custom header</h3>
              </modal>
            </div>
          </div>
          <div class="section">
            <p class="section__title">Немного о сюжете:</p>
            <p class="section__description">{{ film.summary }}</p>
          </div>
          <div class="section mt-2 mb-3">
            <span class="section__title">Рейтинг:</span>
            <!-- <p class="section__description">{{rating}}</p> -->
          </div>
          <div class="section mt-2 mb-3">
            <span class="section__title">Актерский состав: </span>
            <div class="d-flex mt-4">
              <div v-for="(keyActress, actress, index) in film.actors" :key="index" class='text-center'>
                <p>{{keyActress.actress}}</p>
                <div class="cardsActress">
                  <img :src="'/img/actresses/'+keyActress.imgName" width='100%' height='100%'/>
                </div>
              </div>
            </div>
            <!-- <span class="section__description">{{ film.actors.join(", ") }}</span> -->
          </div>
          <div class="section mt-2 mb-3">
            <span class="section__title">Режисеры: </span>
            <span class="section__description"> {{ film.director }}</span>
          </div>
          <div>
            <img src="../assets/ratings.png" height="100px" />
          </div>
          <div class="d-flex justify-content-start align-items-center col-12">
            <div v-for="rating in ratings" :key="rating">
              <button class="btn btn-outline-light">
                {{ rating }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="col-12 mt-5">
          <button @click="traierFunction(true)" class="rounded-0 btn btn-lg btn-danger">
            Трейлер
          </button>
          <button @click="traierFunction(false)" class="btn btn-lg btn-danger rounded-0">
            Смотреть онлайн
          </button>
        </div>
        <div class="col-12">
          <div v-if="!trailer" class="h1 text-white mt-5">Not Found</div>
          <iframe
            v-else
            width="100%"
            height="500"
            :src="film.video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "../mocks/data";
import ratingsImg from "../assets/ratings.png";
import { mapGetters, mapActions } from "vuex";

export default {
  mounted() {
    this.films = data;
    const film = this.films.find((film) => film.id == this.$route.params.id);
    if (film) {
      this.film = film;
    }
    this.items = this.film.frames;
    console.log(this.items);
  },
  computed: {
    ...mapGetters(["getRating"]),
    ratings() {
      let arr = this.getRating;
      return arr.reverse();
      // return reactions;
      // return this.$store.getters.getReactions
    },
  },
  data() {
    return {
      film: null,
      trailer: true,
      showModal: false,
      items: [],
      index: null,
    };
  },
  methods: {
    ...mapActions({ load: "loadRating" }),
    traierFunction(bool) {
      this.trailer = bool;
    },
  },
  created() {
    this.load(1000);
  },
};
</script>
<style lang="scss">
.img-frame {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
.img-frame img {
  width: 100%;
  height: 100%;
}
.image {
  height: 100px;
  width: 150px;
  float: left;
  margin-left: 10px;
}
</style>
