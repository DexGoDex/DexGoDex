<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tab1"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <section>
        <img src="assets/content7/arungjeram1.png" height="275" />
      </section>
      <section class="ion-padding-horizontal">
        <h2>Arung Jeram</h2>
        <ion-text><ion-icon :icon="location"></ion-icon> Sidamukti</ion-text>
      </section>
      <section class="ion-padding-horizontal">
        <h5>Deskripsi</h5>
        <p>
          Arum jeram memiliki panjang sekitar 1 KM. Desa Sidamukti memfasilitasi
          untuk masyarakat seperti perlengkapan keamanan, dayung, dan perahu.
          Biasanya arum jeram sudah satu paket dengan wisata lainnya. Yuk,
          berlibur di Arum Jeram Desa Sidamukti!
        </p>
        <div class="ion-text-left" style="margin-bottom: 25px">
          <small style="color:rgba(58,58,58,50%)">Sumber: Terpercaya</small>
        </div>
      </section>
      <section class="ion-padding-horizontal">
        <h5>Galeri</h5>
        <ion-slides :options="slideOpts" zoom>
          <ion-slide>
            <div class="swiper-zoom-container">
              <img src="assets/content7/arungjeram1.png" />
            </div>
          </ion-slide>
          <ion-slide>
            <img src="assets/img/content-video.png" />
          </ion-slide>
          <ion-slide>
            <img src="assets/img/content-video.png" />
          </ion-slide>
        </ion-slides>
      </section>
      <section class="ion-padding-horizontal">
        <h5>Lokasi</h5>
        <iframe
          id="lokasi"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26648.164843387858!2d108.19063136167648!3d-6.857798560514725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f0436dc0d17%3A0xbfd45e9dac204617!2sSidamukti%2C%20Kec.%20Majalengka%2C%20Kabupaten%20Majalengka%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1629470348778!5m2!1sid!2sid"
          width="100%"
          height="200"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>
      <section class="ion-padding-horizontal">
        <div class="ion-text-center">
          <ion-button
            size="large"
            expand="full"
            shape="round"
            href="/tabs/tab3"
          >
            <ion-icon :icon="call" style="margin-right:10px" />
            <ion-label>Contact</ion-label>
          </ion-button>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonSlide,
  IonSlides,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { location, call } from "ionicons/icons";

export default defineComponent({
  name: "Home",
  components: {
    IonSlide,
    IonSlides,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonBackButton,
  },
  setup() {
    const slideOpts = {
      speed: 400,
      slidesPerView: 1.5,
      spaceBetween: 15,
      ionSlideTap: () => {
        console.log("hello");
      },
    };
    return {
      location,
      call,
      slideOpts,
    };
  },
});
</script>

<style scoped>
section {
  margin-bottom: 35px;
}

#lokasi {
  border-radius: 16px;
}
ion-slide img {
  border-radius: 16px;
}

ion-slides {
  height: 80%;
}
ion-label {
  font-size: 14px;
}
p {
  text-align: justify;
}
</style>
