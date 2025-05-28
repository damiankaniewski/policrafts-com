<template>
  <section id="gallery">
    <h1>Galeria</h1>
    <div
      class="gallery-grid"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <div
        class="image-tile"
        v-for="(image, index) in images"
        :key="index"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
        :class="{ dimmed: isHovering && hoveredIndex !== index }"
      >
        <img :src="image.url" :alt="`Obrazek ${index + 1}`" loading="lazy" />
        <div class="caption">
          <h2>{{ image.title }}</h2>
          <p class="description">{{ image.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GallerySection",
  data() {
    return {
      isHovering: false,
      hoveredIndex: null,
      images: Array.from({ length: 15 }, (_, i) => {
        const width = Math.floor(Math.random() * 100) + 200;
        const height = Math.floor(Math.random() * 30) + 200;
        return {
          url: `https://picsum.photos/${width}/${height}?random=${i + 1}`,
          title: `Zdjęcie ${i + 1}`,
          description: "Krótki opis zdjęcia po najechaniu.",
        };
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 20px;

  h1 {
    font-size: 7rem;
    color: #000;
    font-weight: 700;
    margin: 0;
    margin-bottom: 50px;
  }

  .gallery-grid {
    column-count: 4;
    column-gap: 0;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);

    @media (max-width: 1200px) {
      column-count: 2;
    }

    @media (max-width: 768px) {
      column-count: 1;
    }

    .image-tile {
      position: relative;
      margin-bottom: 0;
      overflow: hidden;
      break-inside: avoid;
      cursor: pointer;
      transition: transform 0.3s ease, filter 0.3s ease;
      transform-origin: center center;

      img {
        width: 100%;
        display: block;
        object-fit: cover;
        transition: opacity 0.3s ease;
      }

      .caption {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
        color: #fff;
        padding: 12px;
        box-sizing: border-box;
        text-align: left;

        h2 {
          margin: 0;
          font-size: 1.2rem;
        }

        .description {
          margin: 5px 0 0;
          font-size: 0.9rem;
          opacity: 0;
          max-height: 0;
          transition: opacity 0.3s ease, max-height 0.3s ease;
          overflow: hidden;
        }
      }

      &:hover {
        transform: scale(1.1);
        z-index: 2;
        box-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);

        .caption .description {
          opacity: 1;
          max-height: 100px;
        }
      }

      &.dimmed {
        filter: brightness(50%);
      }
    }
  }
}
</style>
