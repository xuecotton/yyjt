<template>
  <div class="banner_ad">
    <!-- <img :src="msg" alt="" /> -->
    <img src="../assets/banner_ad.png" alt="" />
    <!-- ../assets/banner_ad.png -->
  </div>
</template>

<script>
export default {
    name:"banner_ad",
    props: {
    msg: String
    }
};
</script>

<style lang="scss" scoped>
.banner_ad {
  width: 100%;
  height: 450px;
}

.banner_ad img {
  width: 100%;
  height: 100%;
}
</style>