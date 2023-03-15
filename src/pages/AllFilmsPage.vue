<template>
  <div>
    <div class="row m-0 mt-5">
      <div class="col-3">
        <div class="col-12 p-5 text-white">
          <h1>News</h1>
        </div>
        <div class="col-12">
          <div class="col-9 m-auto text-white mt-4 d-flex">
            <div class="col-4 imgNews">
              <img
                src="https://montessori-ami.org/sites/default/files/images/countries/russia.jpg"
                class="w-100 h-100"
              />
            </div>
            <div class="col-8 marginLeft">
              Russia delivered two Mi-8 helicopters to Greece to fight forest fires
            </div>
          </div>
          <div class="col-9 m-auto text-white mt-4 d-flex">
            <div class="col-4 imgNews">
              <img
                src="https://montessori-ami.org/sites/default/files/images/countries/russia.jpg"
                class="w-100 h-100"
              />
            </div>
            <div class="col-8 marginLeft">
              Russia delivered two Mi-8 helicopters to Greece to fight forest fires
            </div>
          </div>
        </div>
        <div class="col-12 p-5 text-white">
          <div class="col-12 d-flex justify-content-between">
            <div class="col-4">
              <h5>Genres</h5>
              <ul class="text-white">
                <li v-for="(genre, index) in genres.genres" :key="index">
                  <router-link class="text-white" :to="genre.title">{{
                    genre.value
                  }}</router-link>
                  <!-- <router-link
                    class="text-white"
                    :to="{ name: 'genre', params: { genre: genre.title } }"
                    >{{ genre.value }}
                  </router-link> -->
                </li>
              </ul>
            </div>
            <div class="col-4">
              <h5>By year</h5>
              <ul class="text-white">
                <li v-for="(item, index) in date" :key="index">{{ item }}</li>
              </ul>
              <h5>By country</h5>
              <ul class="text-white">
                <li v-for="(country, index) in countries" :key="index">{{ country }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="col-12">
          <vueper-slides :dragging-distance="50" class="mt-5">
            <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :image="slide.image"
              :title="slide.title"
              :content="slide.content"
              :link="slide.link"
            />
          </vueper-slides>
        </div>
        <div class="background-1 p-4">
          <div class="row">
            <div class="col-12 text-white h1"><i class="fas fa-sort"></i> Filters</div>
            <div class="col-12 d-flex justify-content-between mt-4">
              <div class="col m-1">
                <label for="genres" class="form-label text-white h4">Genres</label>
                <select
                  v-model="filterGenres"
                  id="formGroupExampleInput2"
                  class="form-select form-select-lg mb-3 mt-2 p-2"
                >
                  <option value="genres">Genres</option>
                  <option
                    v-for="(genre, index) in genres.genres"
                    :value="genre"
                    :key="index"
                  >
                    {{ genre.value }}
                  </option>
                </select>
              </div>
              <div class="col m-1">
                <label for="country" class="form-label text-white h4">Countries</label>
                <select
                  v-model="filterCountry"
                  id="country"
                  class="form-select form-select-lg mb-3 mt-2 p-2"
                >
                  <option value="country">страна</option>
                  <option v-for="(country, index) in countries" :key="index">
                    {{ country }}
                  </option>
                </select>
              </div>
              <div class="col m-1">
                <label for="year" class="form-label text-white h4">years</label>
                <select
                  v-model="filterYear"
                  id="year"
                  class="form-select form-select-lg mb-3 mt-2 p-2"
                >
                  <option value="year">years</option>

                  <option v-for="(item, index) in date" :key="index">
                    {{ item }}
                  </option>
                </select>
              </div>
              <div class="col m-1">
                <label for="country" class="form-label text-white h4">Rating</label>
                <select id="country" class="form-select form-select-lg mb-3 mt-2 p-2">
                  <option v-for="(item, index) in rating" :key="index">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-danger col-4 btn-lg" @click="updateData()">
                Find
              </button>
            </div>
          </div>
        </div>
        <div class="container bg-2 d-flex w-100 p-3 mx-auto flex-column">
          <main role="main" class="inner cover">
            <div class="col-12 h1 text-white">Movies</div>
            <div class="card-group justify-content-around">
              <FilmCard
                v-for="(film, index) in pageOfItems"
                v-if="film.bool == true"
                :key="index"
                :title="film.title"
                :id="film.id"
                :img="film.img"
                :year="film.year"
                :duration="film.duration"
                :genre="film.genre"
                :summary="film.summary"
                :actors="film.actors"
              />
            </div>
          </main>
          <div class="card bg-transparent border-0 text-center m-3">
            <div class="pb-3 pt-3">
              <jw-pagination
                :pageSize="4"
                :items="films"
                @changePage="onChangePage"
              ></jw-pagination>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="col-12 p-5 text-white">
          <h1>Advertising</h1>
        </div>
        <div class="col-12">
          <div class="col-9 m-auto text-white mt-4">
            <div class="col-12 p-3">
              <img src="../../public/img/Vivaro.jpg" class="w-100" alt="" />
            </div>
            <div class="col-12 p-3">
              <img src="../../public/img/Vivaro1.jpg" class="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FilmCard from "../components/FilmCard";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import JwPagination from "jw-vue-pagination";
import Genres from "../mocks/Genres.json";
import DateData from "../mocks/Date";
import Rating from "../mocks/Rating";
import Countries from "../mocks/Countries";
import filmsData from "../mocks/data";

export default {
  name: "AllFilmsPage",
  components: {
    FilmCard,
    VueperSlides,
    VueperSlide,
    JwPagination,
  },
  mounted() {
    this.films = filmsData;
    this.genres = Genres;
    this.date = DateData;
    this.countries = Countries;
    this.rating = Rating;
  },
  data() {
    return {
      filterGenres: "genres",
      filterYear: "year",
      filterCountry: "country",
      date: null,
      genres: null,
      pageOfItems: [],
      rating: null,
      slides: [
        {
          title: "Chaos walking",
          content: "",
          image: require("../../public/img/postupXaos.jpg"),
          link:
              "/films/6",
        },
        {
          title: "ASTRAL 2",
          content: "",
          image: require("../../public/img/Astral.jpg"),
          link:
            "/films/1",
        },
      ],
      films: null,
    };
  },
  methods: {
    updateData() {
      this.films = [];
      let genres = null;
      let country = null;
      let year = null;
      for (let i = 0; i < filmsData.length; i++) {
        genres = false;
        country = false;
        year = false;
        if (this.filterGenres != "genres") {
          for (let j = 0; j < filmsData[i].genre.length; j++) {
            if (
              filmsData[i].genre[j]
                .toLowerCase()
                .includes(this.filterGenres.value.toLowerCase())
            ) {
              genres = true;
            }
          }
        } else {
          genres = true;
        }

        if (this.filterCountry != "country") {
          for (let j = 0; j < filmsData[i].country.length; j++) {
            if (
              filmsData[i].country[j].toLowerCase() == this.filterCountry.toLowerCase()
            ) {
              country = true;
            }
          }
        } else {
          country = true;
        }

        if (this.filterYear != "year") {
          year = filmsData[i].year.includes(this.filterYear);
        } else {
          year = true;
        }
        if (year && genres && country) {
          this.films.push(filmsData[i]);
        }
      }
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>