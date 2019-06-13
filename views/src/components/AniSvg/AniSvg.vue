<template>
  <svg ref="component_aniSvg_ref" class="component_aniSvg_frame">
    <!-- Symbol -->
    <symbol id="component_aniSvg_text_symbol">
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle">{{aniSvgTxt}}</text>
    </symbol>
    <!-- Duplicate symbols -->
    <use
      xlink:href="#component_aniSvg_text_symbol"
      class="themeStroke block al"
      :class="component_aniSvg_text_loaded ? 'component_aniSvg_text' : ''"></use>
    <use
      xlink:href="#component_aniSvg_text_symbol"
      class="themeStroke block al"
      :class="component_aniSvg_text_loaded ? 'component_aniSvg_text' : ''"></use>
    <use
      xlink:href="#component_aniSvg_text_symbol"
      class="themeStroke block al"
      :class="component_aniSvg_text_loaded ? 'component_aniSvg_text' : ''"></use>
  </svg>
</template>

<script src="./AniSvg.js"></script>

<style scoped lang="less" src="./AniSvg.less"></style>