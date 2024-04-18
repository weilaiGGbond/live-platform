<template>
  <div class="nailTop">
    <div class="nailTopCenter">
      <div class="leftNailTopBtn">
        <ul>
          <li :class="{ showStatusColor: $route.path == '/' }">首页</li>
          <li>分类</li>
          <li>直播视频</li>
        </ul>
      </div>
      <div class="searchNail">
        <div class="searchNailInput">
          <div class="container">
            <input type="text" placeholder="Search..." />
            <div class="search"></div>
          </div>
        </div>
      </div>
      <div class="userNail"></div>
    </div>
  </div>
  <div></div>
</template>

<script>
export default {};
</script>
<script setup lang="ts">
</script>
<style lang="scss">
@import "@/assets/style/homePage/homePageTop.scss";
@import "@/assets/style/component/component.scss";
</style>