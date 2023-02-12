<template>
    <div>
       <div class="container mt-5">
            <div class="row">
                    <div class="img-wrapper col p-0 d-flex justify-content-center">
                            <img src="../../public/img/lake.jpg" :class="imgFilters" :style='imgStyles' width="100%" height="100%" v-if="isLakeVisable">
                            <div v-else>картинка скоро вернется</div>
                    </div>
                    <div class="ms-5 controls col">
                        <h1>Редактор</h1>
                        <div>
                            <h2>Фильтры</h2>
                            <button :class="imgFilters.sepia ? 'active' : ''" @click="imgFilters.sepia = !imgFilters.sepia">
                                Сепия
                            </button>
                            <button :class="imgFilters.borderImg ? 'active' : ''" @click="imgFilters.borderImg = !imgFilters.borderImg">
                                Рамка
                            </button>
                            <button :class="imgFilters.shadowImg ? 'active' : ''" @click="imgFilters.shadowImg = !imgFilters.shadowImg">
                                Тень
                            </button>
                            <button :class="imgFilters.smallImg ? 'active' : ''" @click="imgFilters.smallImg = !imgFilters.smallImg">
                                Уменьшить
                            </button>
                        </div>
                        <div>
                            <h2>Размер</h2>
                            <p>Ширина {{imgSizes.currentWidth}}</p>
                            <input type="range" :value="imgSizes.currentWidth" @input="imgSizes.currentWidth = $event.target.value" :min="imgSizes.minWidth" :max="imgSizes.maxWidth">
                            <p>Высота {{imgSizes.currentHeight}}</p>
                            <input type="range" :value="imgSizes.currentHeight" @input="imgSizes.currentHeight = $event.target.value" :min="imgSizes.minHeight" :max="imgSizes.maxHeight">
                        </div>
                        <div>
                            <button :class="isLakeVisable ? 'active' : ''" @click="isLakeVisable = !isLakeVisable">
                                {{isLakeVisable ? 'Спрятать' : 'Показать'}}
                            </button>
                        </div>
                        <div>
                            <h2>Поворот</h2>
                            <div>
                                Угол {{rotate.value}}
                                <input type="range" :value="rotate.value" @input="rotate.value = $event.target.value" :min='rotate.min' :max='rotate.max'>
                            </div>
                        </div>
                    </div>
            </div>
       </div> 
    </div>
</template>
<script>
export default {
    name:'photoRedactor',
    data() {
        return {
            isLakeVisable:true,
            imgFilters:{
                sepia:false,
                borderImg:false,
                smallImg:false,
                shadowImg:false,
            },
            imgSizes:{
                maxWidth:100,
                maxHeight:400,
                currentWidth:100,
                currentHeight:400,
            },
            rotate:{
                min:0,
                max:360,
                value:0,
            }
        }
    },
    computed: {
        imgStyles(){
            return{
                width: `${this.imgSizes.currentWidth}%`,
                height:`${this.imgSizes.currentHeight}px`,
                transform: `rotate(${this.rotate.value}deg)`,
            }
        },
    },
}
</script>
<style scoped>
  .img-wrapper{
        width:600px;
        height: 400px;
        background:#cecece;
  }
  img{
      transition: 2s;
  }
  .sepia{
      filter:sepia(100%);
  }
  .borderImg{
      border: 10px solid #464646;
  }
  .smallImg{
      width:400px !important;
      margin:auto;
  }
  .shadowImg{
      box-shadow:7px 7px 10px 0 #7e7e7e !important;
  }
  .active{
      background:#dbdbdb
  }
</style>