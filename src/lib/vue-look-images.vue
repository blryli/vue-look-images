<template>
  <div>
      <svg v-if="urlArr.length == 0" :style="{width:imgSize[0],height:imgSize[1]}" t="1505964236333" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3370"><path d="M816.133254 909.809261c-44.846394 0-85.936231-16.017812-117.913527-42.603307L146.732387 867.205954c-45.958728 0-83.220377-37.440727-83.220377-83.621513L63.512011 198.205201c0-46.177716 37.262672-83.620489 83.220377-83.620489L874.920148 114.584712c45.956681 0 83.219353 37.442774 83.219353 83.620489l0 409.082002c26.584472 31.977295 42.60126 73.067132 42.60126 117.91455C1000.740762 827.158866 918.09139 909.809261 816.133254 909.809261zM816.133254 853.004511c25.282826 0 48.787146-7.430226 68.632123-20.104897L707.439716 658.224316c-12.038174 19.49603-19.108197 42.390459-19.108197 66.978461C688.331519 795.788391 745.549685 853.004511 816.133254 853.004511zM120.313691 767.80506c0 23.533996 18.900465 42.60126 42.212404 42.60126l489.944682 0c-13.31526-25.502837-20.942985-54.445006-20.942985-85.203544 0-101.954043 82.652442-184.604438 184.604438-184.604438 8.556886 0 16.933671 0.720408 25.172309 1.856277-36.860513-44.763506-92.344175-73.704652-152.906505-73.80289-107.292632-0.181125-198.87342 90.832751-198.87342 199.750393 0 15.685237-15.892969 28.40084-35.502585 28.40084-18.428721 0-33.392528-11.275811-35.153638-25.64303-31.632441-43.265386-81.944314-71.582315-139.078569-71.582315-62.11264 0-116.446106 33.226752-147.149385 83.023902L120.313691 682.601516 120.313691 767.80506zM901.338844 213.987652c0-23.520693-18.901489-42.60126-42.213427-42.60126L162.526095 171.386392c-23.311939 0-42.212404 19.080567-42.212404 42.60126l0 386.850675c41.893132-39.382962 97.891518-63.511499 159.477154-63.511499 63.070454 0 120.232338 25.349341 162.431439 66.439178 29.594015-110.011556 128.470977-190.972473 246.217704-190.972473 88.905866 0 167.133531 46.13883 212.897831 116.04497L901.337821 213.987652zM816.133254 597.398995c-25.27771 0-48.784076 7.433296-68.613704 20.10899l177.310312 174.675298c12.037151-19.498076 19.107173-42.394552 19.107173-66.981531C943.937035 654.629441 886.720915 597.398995 816.133254 597.398995zM304.920176 441.194374c-54.903447 0-99.403964-44.514843-99.403964-99.402941 0-54.901401 44.500517-99.403964 99.403964-99.403964 54.901401 0 99.402941 44.50154 99.402941 99.403964C404.322094 396.679531 359.820554 441.194374 304.920176 441.194374zM304.920176 284.98873c-31.368428 0-56.802704 25.433252-56.802704 56.802704 0 31.367405 25.433252 56.80168 56.802704 56.80168 31.367405 0 56.80168-25.434276 56.80168-56.80168C361.720833 310.421982 336.287581 284.98873 304.920176 284.98873z" p-id="3371" fill="#8a8a8a"></path></svg>
      <img  v-else v-for="(url, index) in urlArr" class="small-img" :class="[{'more-img':showOne == true},{'img-i-b':alignRow == true}]" :style="{width:imgSize[0],height:imgSize[1]}"  @click="showImage(index)" :src="url">
    	<div v-if="show == true" class="fix-img" @click="hideImage"></div>
    	<div v-show="show == true" class="big-img">
    	    <div class="show-img">
    	        <img :src="urlSrc">
    	    </div>
    	    <div class="img-list">
    	        <img v-for="(url, index) in urlArr" ref="img" :src="url" @mouseenter="showBigImage(index)">
    	    </div>
    	    <a class="fa-close" @click="hideImage">x</a>
    	</div>
  </div>
</template>

<script>
export default {
    props: {
      urlArr: {
        type: Array,
        default: function() {
          return []
        }
      },
      showOne: {
      	type:Boolean,
      	default: false
      },
      alignRow: {
      	type:Boolean,
      	default : true
      },
      imgSize: {
      	type: Array,
      	default: function () { 
      		return [30, 30]
      	}
      },
      defaultColor: {
      	type: String,
      	default: '#15A6BB'
      },
    },
    data () {
        return {
           showImgIndex: '',
           urlSrc: '',
           show: '',
       }
    },
    methods:{
  	 	showImage(index) {
          this.urlSrc = this.urlArr[index]
          this.show = true;
          this.$nextTick(function () {
            document.body.style.overflowY = 'hidden';
            document.body.style.height = '100%';
            this.showBigImage(index) 
        	})
      },
      showBigImage(index) {
          this.urlSrc = this.urlArr[index];
          this.$refs.img.forEach((d, i) => {
            d.style.borderColor = 'transparent';
          })
          this.$refs.img[index].style.borderColor = this.defaultColor
      },
      hideImage() {
          this.show = false
          this.$nextTick(function () {
            document.body.style.overflowY = 'visible';
            document.body.style.height = 'auto';
          })
      }
    }
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.small-img{
  margin: 3px;
  cursor: pointer;
  display: block;
  background-color: #f0f0f0;
}
.img-i-b{
  display: inline-block;
}
.more-img{
  & +.more-img{
      display: none;
  }
}
.fix-img{
  z-index: 10000;
  position: fixed;
  background-color: #000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  opacity: .6;
}
.big-img{
  position: fixed;
  top: 12%;
  left: 34%;
  box-shadow: 0 10px 30px rgba(0,0,0,.5);
  background-color: #fff;
  border:1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: block;
  margin: 0 auto;
  z-index: 11000;
  .show-img{
      width: 600px;
      height: 500px;
      border: 1px solid #ddd;
      margin-bottom: 6px;
      overflow: hidden;
      img{
          width: 100%;
          max-width: 600px;
          height: auto;
          margin: 0 auto;
      }
  }
  .fa-close{
      position: absolute;
      right: -18px;
      top: -18px;
      width: 26px;
      height: 26px;
      line-height: 22px;
      text-align: center;
      border: 2px solid #fff;
      background-color: #666;
      border-radius: 20px;
      color: #fff;
      cursor: pointer;
      box-shadow: -2px 1px 2px rgba(0,0,0,.4);
      &:hover{
          background-color: #E24747;
      }
  }
  .img-list{
      text-align: center;
      img{
          width: 50px;
          height: 50px;
          border: 2px solid transparent;
          padding: 2px;
          cursor: pointer;
      }
  }
}
</style>