<template>
  <section id="gallery">
    <h2>Galeria</h2>
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
        @click="openModal(image)"
        :class="{
          dimmed: isHovering && hoveredIndex !== `${section}-${index}`,
        }"
      >
        <img :src="image.url" :alt="image.title" loading="lazy" />
        <div class="caption">
          <h3>{{ image.title }}</h3>
          <p class="description">{{ image.description }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="modal-fade">
      <div v-if="modalImage" class="modal" @click.self="closeModal">
        <button class="close-button" @click="closeModal">×</button>
        <button class="arrow left" @click.stop="prevImage">‹</button>

        <div class="carousel-track">
          <div
            v-for="(img, i) in visibleImages"
            :key="img.url"
            class="carousel-image"
            :class="{
              center: i === 1,
              left: i === 0,
              right: i === 2,
            }"
          >
            <img :src="img.url" :alt="img.title" />
          </div>
        </div>

        <button class="arrow right" @click.stop="nextImage">›</button>

        <div class="modal-caption">
          <h3>{{ modalImage.title }}</h3>
          <p>{{ modalImage.description }}</p>
        </div>
      </div>
    </transition>
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
      modalImage: null,
      currentIndex: null,
    };
  },
  computed: {
    groupedImages() {
      const grouped = this.images.reduce((acc, img) => {
        if (!acc[img.section]) acc[img.section] = [];
        acc[img.section].push(img);
        return acc;
      }, {});
      return Object.fromEntries(
        Object.entries(grouped).sort(([a], [b]) => Number(a) - Number(b))
      );
    },
    flatImages() {
      return Object.values(this.groupedImages).flat();
    },
    visibleImages() {
      const len = this.flatImages.length;
      const prev = this.flatImages[(this.currentIndex - 1 + len) % len];
      const curr = this.flatImages[this.currentIndex];
      const next = this.flatImages[(this.currentIndex + 1) % len];
      return [prev, curr, next];
    },
  },
  methods: {
    openModal(image) {
      this.currentIndex = this.flatImages.findIndex((img) => img === image);
      this.modalImage = this.flatImages[this.currentIndex];
      document.addEventListener("keydown", this.handleKey);
    },
    closeModal() {
      this.modalImage = null;
      this.currentIndex = null;
      document.removeEventListener("keydown", this.handleKey);
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.flatImages.length) %
        this.flatImages.length;
      this.modalImage = this.flatImages[this.currentIndex];
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.flatImages.length;
      this.modalImage = this.flatImages[this.currentIndex];
    },
    handleKey(e) {
      if (e.key === "ArrowLeft") this.prevImage();
      else if (e.key === "ArrowRight") this.nextImage();
      else if (e.key === "Escape") this.closeModal();
    },
  },
  created() {
    const context = require.context(
      "@/assets/images/gallery",
      true,
      /\.(jpg|webp)$/i
    );
    this.images = context.keys().map((key) => {
      const url = context(key);
      const cleaned = key.replace(/^\.\/|\.jpg$|\.webp$/gi, "");
      const [section, filename] = cleaned.split("/", 2);
      const [title, description] = (filename || "")
        .split("-")
        .map((s) => s.trim());
      return {
        url,
        section,
        title: title || "Bez tytułu",
        description: description || "Brak opisu",
      };
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 16px;

  .gallery-grid {
    column-count: 4;
    column-gap: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

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

        h3 {
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
        z-index: 2;
        box-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);

        .caption .description {
          opacity: 1;
          max-height: 100px;
        }
      }

      &.dimmed {
        filter: brightness(70%);
      }
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 9999;
    transition: opacity 0.3s ease;
    padding: 20px;

    .carousel-track {
      position: relative;
      width: 100%;
      max-width: 1000px;
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      perspective: 1000px;
    }

    .carousel-image {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.3s ease;
      opacity: 0.5;
      z-index: 1;

      img {
        max-height: 80vh;
        object-fit: cover;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
      }

      &.center {
        transform: translateX(0) scale(1) translateY(-50%);
        opacity: 1;
        z-index: 3;
      }

      &.left {
        transform: translateX(-60%) scale(0.8) translateY(-50%);
        z-index: 2;
      }

      &.right {
        transform: translateX(60%) scale(0.8) translateY(-50%);
        z-index: 2;
      }
    }

    .modal-image {
      max-width: 90%;
      max-height: 80%;
      object-fit: contain;
    }

    .modal-caption {
      color: white;
      text-align: center;
      margin-top: 10px;

      h3 {
        margin: 0;
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
        margin: 0.5em 0 0;
      }
    }

    .close-button {
      position: absolute;
      top: 20px;
      right: 45px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      font-size: 2rem;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid white;
      color: white;
      cursor: pointer;
      z-index: 1000;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    .arrow {
      position: absolute;
      bottom: 50%;
      font-size: 8rem;
      color: white;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 16px;
      z-index: 1000;
      user-select: none;
      transition: all 0.3s ease-in-out;

      &.left {
        left: 25px;
      }

      &.right {
        right: 25px;
      }

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.75s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.75s ease;
  }

  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-to,
  .modal-fade-leave-from {
    opacity: 1;
  }
}
</style>
