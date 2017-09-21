<template>
  <div id="app">
    <h2>vue-look-images</h2>
    <vue-look-images :url-arr="imgs"></vue-look-images>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      imgs: [ 
        'http://pic2.97uimg.com/58pic/19/34/12/01q58PICkKe.jpg!w1200',
        'http://pic2.97uimg.com/58pic/19/77/18/38v58PICbIJ.jpg!w1200'
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
}

</style>
