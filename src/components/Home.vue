<template>
  <section class="wrap">
    <img :src="frames[currentFrame]" alt="Policrafts" class="frame" />
  </section>
</template>

<script setup>
import frame_0001 from "@/assets/images/background/frame_0001.jpg";
import frame_0002 from "@/assets/images/background/frame_0002.jpg";
import frame_0003 from "@/assets/images/background/frame_0003.jpg";
import frame_0004 from "@/assets/images/background/frame_0004.jpg";
import frame_0005 from "@/assets/images/background/frame_0005.jpg";
import frame_0006 from "@/assets/images/background/frame_0006.jpg";
import frame_0007 from "@/assets/images/background/frame_0007.jpg";
import frame_0008 from "@/assets/images/background/frame_0008.jpg";
import frame_0009 from "@/assets/images/background/frame_0009.jpg";
import frame_0010 from "@/assets/images/background/frame_0010.jpg";
import frame_0011 from "@/assets/images/background/frame_0011.jpg";
import frame_0012 from "@/assets/images/background/frame_0012.jpg";
import frame_0013 from "@/assets/images/background/frame_0013.jpg";
import frame_0014 from "@/assets/images/background/frame_0014.jpg";
import frame_0015 from "@/assets/images/background/frame_0015.jpg";
import frame_0016 from "@/assets/images/background/frame_0016.jpg";
import frame_0017 from "@/assets/images/background/frame_0017.jpg";
import frame_0018 from "@/assets/images/background/frame_0018.jpg";
import frame_0019 from "@/assets/images/background/frame_0019.jpg";
import frame_0020 from "@/assets/images/background/frame_0020.jpg";
import frame_0021 from "@/assets/images/background/frame_0021.jpg";
import frame_0022 from "@/assets/images/background/frame_0022.jpg";
import frame_0023 from "@/assets/images/background/frame_0023.jpg";
import frame_0024 from "@/assets/images/background/frame_0024.jpg";
import frame_0025 from "@/assets/images/background/frame_0025.jpg";
import frame_0026 from "@/assets/images/background/frame_0026.jpg";
import frame_0027 from "@/assets/images/background/frame_0027.jpg";
import frame_0028 from "@/assets/images/background/frame_0028.jpg";
import frame_0029 from "@/assets/images/background/frame_0029.jpg";
import frame_0030 from "@/assets/images/background/frame_0030.jpg";
import frame_0031 from "@/assets/images/background/frame_0031.jpg";
import frame_0032 from "@/assets/images/background/frame_0032.jpg";
import frame_0033 from "@/assets/images/background/frame_0033.jpg";
import frame_0034 from "@/assets/images/background/frame_0034.jpg";
import frame_0035 from "@/assets/images/background/frame_0035.jpg";
import frame_0036 from "@/assets/images/background/frame_0036.jpg";
import frame_0037 from "@/assets/images/background/frame_0037.jpg";
import frame_0038 from "@/assets/images/background/frame_0038.jpg";
import frame_0039 from "@/assets/images/background/frame_0039.jpg";
import frame_0040 from "@/assets/images/background/frame_0040.jpg";
import frame_0041 from "@/assets/images/background/frame_0041.jpg";
import frame_0042 from "@/assets/images/background/frame_0042.jpg";
import frame_0043 from "@/assets/images/background/frame_0043.jpg";
import frame_0044 from "@/assets/images/background/frame_0044.jpg";
import frame_0045 from "@/assets/images/background/frame_0045.jpg";
import frame_0046 from "@/assets/images/background/frame_0046.jpg";
import frame_0047 from "@/assets/images/background/frame_0047.jpg";
import frame_0048 from "@/assets/images/background/frame_0048.jpg";
import frame_0049 from "@/assets/images/background/frame_0049.jpg";
import frame_0050 from "@/assets/images/background/frame_0050.jpg";
import frame_0051 from "@/assets/images/background/frame_0051.jpg";
import frame_0052 from "@/assets/images/background/frame_0052.jpg";
import frame_0053 from "@/assets/images/background/frame_0053.jpg";
import frame_0054 from "@/assets/images/background/frame_0054.jpg";
import frame_0055 from "@/assets/images/background/frame_0055.jpg";
import frame_0056 from "@/assets/images/background/frame_0056.jpg";
import frame_0057 from "@/assets/images/background/frame_0057.jpg";
import frame_0058 from "@/assets/images/background/frame_0058.jpg";
import frame_0059 from "@/assets/images/background/frame_0059.jpg";
import frame_0060 from "@/assets/images/background/frame_0060.jpg";
import frame_0061 from "@/assets/images/background/frame_0061.jpg";
import frame_0062 from "@/assets/images/background/frame_0062.jpg";
import frame_0063 from "@/assets/images/background/frame_0063.jpg";
import frame_0064 from "@/assets/images/background/frame_0064.jpg";
import frame_0065 from "@/assets/images/background/frame_0065.jpg";
import frame_0066 from "@/assets/images/background/frame_0066.jpg";
import frame_0067 from "@/assets/images/background/frame_0067.jpg";
import frame_0068 from "@/assets/images/background/frame_0068.jpg";
import frame_0069 from "@/assets/images/background/frame_0069.jpg";
import frame_0070 from "@/assets/images/background/frame_0070.jpg";
import frame_0071 from "@/assets/images/background/frame_0071.jpg";
import frame_0072 from "@/assets/images/background/frame_0072.jpg";
import frame_0073 from "@/assets/images/background/frame_0073.jpg";
import frame_0074 from "@/assets/images/background/frame_0074.jpg";
import frame_0075 from "@/assets/images/background/frame_0075.jpg";
import frame_0076 from "@/assets/images/background/frame_0076.jpg";
import frame_0077 from "@/assets/images/background/frame_0077.jpg";
import frame_0078 from "@/assets/images/background/frame_0078.jpg";
import frame_0079 from "@/assets/images/background/frame_0079.jpg";
import frame_0080 from "@/assets/images/background/frame_0080.jpg";
import frame_0081 from "@/assets/images/background/frame_0081.jpg";
import frame_0082 from "@/assets/images/background/frame_0082.jpg";
import frame_0083 from "@/assets/images/background/frame_0083.jpg";
import frame_0084 from "@/assets/images/background/frame_0084.jpg";
import frame_0085 from "@/assets/images/background/frame_0085.jpg";
import frame_0086 from "@/assets/images/background/frame_0086.jpg";
import frame_0087 from "@/assets/images/background/frame_0087.jpg";
import frame_0088 from "@/assets/images/background/frame_0088.jpg";
import frame_0089 from "@/assets/images/background/frame_0089.jpg";
import frame_0090 from "@/assets/images/background/frame_0090.jpg";
import frame_0091 from "@/assets/images/background/frame_0091.jpg";
import frame_0092 from "@/assets/images/background/frame_0092.jpg";
import frame_0093 from "@/assets/images/background/frame_0093.jpg";
import frame_0094 from "@/assets/images/background/frame_0094.jpg";
import frame_0095 from "@/assets/images/background/frame_0095.jpg";
import frame_0096 from "@/assets/images/background/frame_0096.jpg";
import frame_0097 from "@/assets/images/background/frame_0097.jpg";
import frame_0098 from "@/assets/images/background/frame_0098.jpg";
import frame_0099 from "@/assets/images/background/frame_0099.jpg";
import frame_0100 from "@/assets/images/background/frame_0100.jpg";
import frame_0101 from "@/assets/images/background/frame_0101.jpg";
import frame_0102 from "@/assets/images/background/frame_0102.jpg";
import frame_0103 from "@/assets/images/background/frame_0103.jpg";
import frame_0104 from "@/assets/images/background/frame_0104.jpg";
import frame_0105 from "@/assets/images/background/frame_0105.jpg";
import frame_0106 from "@/assets/images/background/frame_0106.jpg";
import frame_0107 from "@/assets/images/background/frame_0107.jpg";
import frame_0108 from "@/assets/images/background/frame_0108.jpg";
import frame_0109 from "@/assets/images/background/frame_0109.jpg";
import frame_0110 from "@/assets/images/background/frame_0110.jpg";
import frame_0111 from "@/assets/images/background/frame_0111.jpg";
import frame_0112 from "@/assets/images/background/frame_0112.jpg";
import frame_0113 from "@/assets/images/background/frame_0113.jpg";
import frame_0114 from "@/assets/images/background/frame_0114.jpg";
import frame_0115 from "@/assets/images/background/frame_0115.jpg";
import frame_0116 from "@/assets/images/background/frame_0116.jpg";
import frame_0117 from "@/assets/images/background/frame_0117.jpg";
import frame_0118 from "@/assets/images/background/frame_0118.jpg";
import frame_0119 from "@/assets/images/background/frame_0119.jpg";
import frame_0120 from "@/assets/images/background/frame_0120.jpg";
import frame_0121 from "@/assets/images/background/frame_0121.jpg";
import frame_0122 from "@/assets/images/background/frame_0122.jpg";
import frame_0123 from "@/assets/images/background/frame_0123.jpg";
import frame_0124 from "@/assets/images/background/frame_0124.jpg";
import frame_0125 from "@/assets/images/background/frame_0125.jpg";
import frame_0126 from "@/assets/images/background/frame_0126.jpg";
import frame_0127 from "@/assets/images/background/frame_0127.jpg";
import frame_0128 from "@/assets/images/background/frame_0128.jpg";
import frame_0129 from "@/assets/images/background/frame_0129.jpg";
import frame_0130 from "@/assets/images/background/frame_0130.jpg";
import frame_0131 from "@/assets/images/background/frame_0131.jpg";
import frame_0132 from "@/assets/images/background/frame_0132.jpg";
import frame_0133 from "@/assets/images/background/frame_0133.jpg";
import frame_0134 from "@/assets/images/background/frame_0134.jpg";
import frame_0135 from "@/assets/images/background/frame_0135.jpg";
import frame_0136 from "@/assets/images/background/frame_0136.jpg";
import frame_0137 from "@/assets/images/background/frame_0137.jpg";
import frame_0138 from "@/assets/images/background/frame_0138.jpg";
import frame_0139 from "@/assets/images/background/frame_0139.jpg";
import frame_0140 from "@/assets/images/background/frame_0140.jpg";
import frame_0141 from "@/assets/images/background/frame_0141.jpg";
import frame_0142 from "@/assets/images/background/frame_0142.jpg";
import frame_0143 from "@/assets/images/background/frame_0143.jpg";
import frame_0144 from "@/assets/images/background/frame_0144.jpg";
import frame_0145 from "@/assets/images/background/frame_0145.jpg";
import frame_0146 from "@/assets/images/background/frame_0146.jpg";
import frame_0147 from "@/assets/images/background/frame_0147.jpg";
import frame_0148 from "@/assets/images/background/frame_0148.jpg";
import frame_0149 from "@/assets/images/background/frame_0149.jpg";
import frame_0150 from "@/assets/images/background/frame_0150.jpg";
import frame_0151 from "@/assets/images/background/frame_0151.jpg";
import frame_0152 from "@/assets/images/background/frame_0152.jpg";
import frame_0153 from "@/assets/images/background/frame_0153.jpg";
import frame_0154 from "@/assets/images/background/frame_0154.jpg";
import frame_0155 from "@/assets/images/background/frame_0155.jpg";
import frame_0156 from "@/assets/images/background/frame_0156.jpg";
import frame_0157 from "@/assets/images/background/frame_0157.jpg";
import frame_0158 from "@/assets/images/background/frame_0158.jpg";
import frame_0159 from "@/assets/images/background/frame_0159.jpg";
import frame_0160 from "@/assets/images/background/frame_0160.jpg";
import frame_0161 from "@/assets/images/background/frame_0161.jpg";
import frame_0162 from "@/assets/images/background/frame_0162.jpg";
import frame_0163 from "@/assets/images/background/frame_0163.jpg";
import frame_0164 from "@/assets/images/background/frame_0164.jpg";
import frame_0165 from "@/assets/images/background/frame_0165.jpg";
import frame_0166 from "@/assets/images/background/frame_0166.jpg";
import frame_0167 from "@/assets/images/background/frame_0167.jpg";
import frame_0168 from "@/assets/images/background/frame_0168.jpg";
import frame_0169 from "@/assets/images/background/frame_0169.jpg";
import frame_0170 from "@/assets/images/background/frame_0170.jpg";
import frame_0171 from "@/assets/images/background/frame_0171.jpg";
import frame_0172 from "@/assets/images/background/frame_0172.jpg";
import frame_0173 from "@/assets/images/background/frame_0173.jpg";
import frame_0174 from "@/assets/images/background/frame_0174.jpg";
import frame_0175 from "@/assets/images/background/frame_0175.jpg";
import frame_0176 from "@/assets/images/background/frame_0176.jpg";
import frame_0177 from "@/assets/images/background/frame_0177.jpg";
import frame_0178 from "@/assets/images/background/frame_0178.jpg";
import frame_0179 from "@/assets/images/background/frame_0179.jpg";
import frame_0180 from "@/assets/images/background/frame_0180.jpg";

const frames = [
  frame_0001,
  frame_0002,
  frame_0003,
  frame_0004,
  frame_0005,
  frame_0006,
  frame_0007,
  frame_0008,
  frame_0009,
  frame_0010,
  frame_0011,
  frame_0012,
  frame_0013,
  frame_0014,
  frame_0015,
  frame_0016,
  frame_0017,
  frame_0018,
  frame_0019,
  frame_0020,
  frame_0021,
  frame_0022,
  frame_0023,
  frame_0024,
  frame_0025,
  frame_0026,
  frame_0027,
  frame_0028,
  frame_0029,
  frame_0030,
  frame_0031,
  frame_0032,
  frame_0033,
  frame_0034,
  frame_0035,
  frame_0036,
  frame_0037,
  frame_0038,
  frame_0039,
  frame_0040,
  frame_0041,
  frame_0042,
  frame_0043,
  frame_0044,
  frame_0045,
  frame_0046,
  frame_0047,
  frame_0048,
  frame_0049,
  frame_0050,
  frame_0051,
  frame_0052,
  frame_0053,
  frame_0054,
  frame_0055,
  frame_0056,
  frame_0057,
  frame_0058,
  frame_0059,
  frame_0060,
  frame_0061,
  frame_0062,
  frame_0063,
  frame_0064,
  frame_0065,
  frame_0066,
  frame_0067,
  frame_0068,
  frame_0069,
  frame_0070,
  frame_0071,
  frame_0072,
  frame_0073,
  frame_0074,
  frame_0075,
  frame_0076,
  frame_0077,
  frame_0078,
  frame_0079,
  frame_0080,
  frame_0081,
  frame_0082,
  frame_0083,
  frame_0084,
  frame_0085,
  frame_0086,
  frame_0087,
  frame_0088,
  frame_0089,
  frame_0090,
  frame_0091,
  frame_0092,
  frame_0093,
  frame_0094,
  frame_0095,
  frame_0096,
  frame_0097,
  frame_0098,
  frame_0099,
  frame_0100,
  frame_0101,
  frame_0102,
  frame_0103,
  frame_0104,
  frame_0105,
  frame_0106,
  frame_0107,
  frame_0108,
  frame_0109,
  frame_0110,
  frame_0111,
  frame_0112,
  frame_0113,
  frame_0114,
  frame_0115,
  frame_0116,
  frame_0117,
  frame_0118,
  frame_0119,
  frame_0120,
  frame_0121,
  frame_0122,
  frame_0123,
  frame_0124,
  frame_0125,
  frame_0126,
  frame_0127,
  frame_0128,
  frame_0129,
  frame_0130,
  frame_0131,
  frame_0132,
  frame_0133,
  frame_0134,
  frame_0135,
  frame_0136,
  frame_0137,
  frame_0138,
  frame_0139,
  frame_0140,
  frame_0141,
  frame_0142,
  frame_0143,
  frame_0144,
  frame_0145,
  frame_0146,
  frame_0147,
  frame_0148,
  frame_0149,
  frame_0150,
  frame_0151,
  frame_0152,
  frame_0153,
  frame_0154,
  frame_0155,
  frame_0156,
  frame_0157,
  frame_0158,
  frame_0159,
  frame_0160,
  frame_0161,
  frame_0162,
  frame_0163,
  frame_0164,
  frame_0165,
  frame_0166,
  frame_0167,
  frame_0168,
  frame_0169,
  frame_0170,
  frame_0171,
  frame_0172,
  frame_0173,
  frame_0174,
  frame_0175,
  frame_0176,
  frame_0177,
  frame_0178,
  frame_0179,
  frame_0180,
];

import { ref, onMounted, onBeforeUnmount } from "vue";

const totalFrames = frames.length;
const currentFrame = ref(0);
const speedMultiplier = 5;

const onScroll = () => {
  const scrollTop = document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Ułamek scrolla (0 do 1)
  const scrollFraction = (scrollTop / maxScroll) * speedMultiplier;

  // Wyliczenie indeksu klatki
  currentFrame.value = Math.min(
    totalFrames - 1,
    Math.floor(scrollFraction * totalFrames)
  );
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<script>
export default {
  name: "HomeSection",
};
</script>

<style scoped>
.wrap {
  height: 200vh;
  position: relative;
}

.frame {
  position: sticky;
  top: 0;
  width: 100%;
  object-fit: cover;
  z-index: 1;
}
</style>
