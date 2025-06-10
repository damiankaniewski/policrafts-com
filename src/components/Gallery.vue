<template>
  <section id="gallery">
    <h1>Galeria</h1>
    <div
      v-for="(group, section) in groupedImages"
      :key="section"
      class="gallery-grid"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <div
        class="image-tile"
        v-for="(image, index) in group"
        :key="`${section}-${index}`"
        @mouseenter="hoveredIndex = `${section}-${index}`"
        @mouseleave="hoveredIndex = null"
        :class="{
          dimmed: isHovering && hoveredIndex !== `${section}-${index}`,
        }"
      >
        <img :src="image.url" :alt="image.title" loading="lazy" />
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
      images: [],
    };
  },
  computed: {
    groupedImages() {
      // Grupa: { '1': [obrazki], '2': [obrazki], ... } posortowana po kluczu
      const grouped = this.images.reduce((acc, img) => {
        if (!acc[img.section]) acc[img.section] = [];
        acc[img.section].push(img);
        return acc;
      }, {});

      return Object.fromEntries(
        Object.entries(grouped).sort(([a], [b]) => Number(a) - Number(b))
      );
    },
  },
  created() {
    const context = require.context(
      "@/assets/images/gallery",
      true,
      /\.(jpg|webp)$/i
    );

    const images = context.keys().map((key) => {
      const url = context(key);
      const cleaned = key.replace(/^\.\/|\.jpg$|\.webp$/gi, "");
      const [section, filename] = cleaned.split("/", 2);
      const [title, description] = filename
        .split("-")
        .map((part) => part.trim());

      return {
        url,
        title: title || "Bez tytułu",
        description: description || "Brak opisu",
        section,
      };
    });

    this.images = images;
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 16px;

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
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

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
