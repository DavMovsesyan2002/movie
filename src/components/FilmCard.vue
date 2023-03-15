<template>
  <div>
    <div class="cellphone-container">
      <div class="movie">
        <router-link
          :to="{ name: 'filmPage', params: { id: id } }"
          class="menu text-white border-white bg-danger rounded-circle border p-4 d-flex justify-content-center"
        >
          <i class="fas fa-play"></i>
        </router-link>
        <div class="movie-img" :style="'background: url(/img/' + img + ')'"></div>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div class="col1">
              <div class="fontSize35 text-white">{{ title }}</div>
              <ul class="movie-gen">
                <li>{{ year }} /</li>
                <li>{{ duration }} /</li>
                <li>
                  <span v-for="(item, index) in genre" :key="index">{{ item }} </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <div class="h5 text-white">Резюме</div>
            </div>
            <div class="col2">
              <ul class="movie-likes">
                <li><i class="fas fa-thumbs-up"></i> 124</li>
                <li><i class="fas fa-thumbs-down"></i> 3</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="movie-description">
                {{ summary }}
              </p>
            </div>
          </div>
          <div class="mr-grid actors-row">
            <div class="col1">
              <p class="movie-actors">
                <span v-for="(actor, index) in actors" :key="index">{{ actor.actress }} / </span>
              </p>
            </div>
          </div>
          <div class="mr-grid action-row">
            <div class="col-12">
              <router-link
                :to="{ name: 'filmPage', params: { id: id } }"
                class="btn btn-danger"
              >
                <i class="fas fa-play"></i> WATCH TRAILER
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilmCard",
  props: ["id",
    "title",
    "year",
    "img",
    "duration",
    "genre",
    "summary",
    "actors",
    // filterGenres: String,
  ],
  beforeUpdate() {
    // this.filmGenre = this.filtergenre.find((film) => film == 'genres' ? null : film);
    // console.log(this.filmGenre);
  },
  data() {
    return {
    };
  },
};
</script>
