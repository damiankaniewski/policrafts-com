<template>
  <div
    class="card"
    ref="target"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseUp"
    @touchstart="handleMouseDown"
    @touchend="handleMouseUp"
    :style="{
      transform: cardClickTransform,
      transition: 'transform 0.25s ease-out',
    }"
  >
    <div class="card-image">
      <div class="overlay"></div>
      <img :src="image" :alt="name" />
      <div class="card-info">
        <h2>{{ name }}</h2>
        <p>{{ position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";

const target = ref(null);
const isClicked = ref(false);
const CLICK_SCALE = 0.95;

const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATION = 6;
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / (elementHeight.value || 1)) * MAX_ROTATION
  ).toFixed(2);
  const rY = (
    (elementX.value / (elementWidth.value || 1)) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2);

  return isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});

const cardClickTransform = computed(() => {
  const base = cardTransform.value || "";
  return isClicked.value ? `${base} scale(${CLICK_SCALE})` : base;
});

const handleMouseDown = () => {
  isClicked.value = true;
};

const handleMouseUp = () => {
  isClicked.value = false;
};
</script>

<script>
export default {
  name: "AboutCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  transition: transform 0.1s ease-in;

  .card-image {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 5;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 0, 0, 0) 50%,
        rgb(0, 0, 0) 110%
      );
    }

    .card-info {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px 12px;
      color: white;
      width: 100%;
      box-sizing: border-box;
      text-align: left;
      z-index: 6;

      h2 {
        font-size: 2.5rem;
        margin: 0;
      }

      p {
        font-size: 1rem;
        margin: 2px 0 0;
      }
    }
  }
}
</style>
