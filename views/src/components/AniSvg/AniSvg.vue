<template>
  <svg ref="component_aniSvg_svg" class="component_aniSvg_svg themeBackgroundColor absolute">
    <!-- Symbol -->
    <symbol id="component_aniSvg_text_symbol">
      <text text-anchor="middle" x="50%" y="50%">{{aniSvgTxt}}</text>
    </symbol>
    <!-- Duplicate symbols -->
    <use xlink:href="#component_aniSvg_text_symbol" class="component_aniSvg_text themeStroke themetextShadow block"></use>
    <use xlink:href="#component_aniSvg_text_symbol" class="component_aniSvg_text themeStroke themetextShadow block"></use>
    <use xlink:href="#component_aniSvg_text_symbol" class="component_aniSvg_text themeStroke themetextShadow block"></use>
  </svg>
</template>

<script src="./AniSvg.js"></script>

<style scoped lang="less" src="./AniSvg.less"></style>