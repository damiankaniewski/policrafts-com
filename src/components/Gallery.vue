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
        @click="openModal(image, flatImages.indexOf(image))"
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
    <transition name="fade">
      <div v-if="modalImage" class="modal" @click.self="closeModal">
        <button class="close-button" @click="closeModal">×</button>
        <button class="arrow left" @click.stop="prevImage">‹</button>
        <img
          :src="modalImage.url"
          :alt="modalImage.title"
          class="modal-image"
        />
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
  },
  methods: {
    openModal(image, index) {
      this.modalImage = image;
      this.currentIndex = index;
      document.addEventListener("keydown", this.handleKey);
    },
    closeModal() {
      this.modalImage = null;
      this.currentIndex = null;
      document.removeEventListener("keydown", this.handleKey);
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.modalImage = this.flatImages[this.currentIndex];
      }
    },
    nextImage() {
      if (this.currentIndex < this.flatImages.length - 1) {
        this.currentIndex++;
        this.modalImage = this.flatImages[this.currentIndex];
      }
    },
    handleKey(e) {
      if (e.key === "ArrowLeft") this.prevImage();
      if (e.key === "ArrowRight") this.nextImage();
      if (e.key === "Escape") this.closeModal();
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
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 9999;
    transition: opacity 0.3s ease;
    padding: 20px;

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

  // Fade transition for modal
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
