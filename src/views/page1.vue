<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xwkwEGFyc7o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <ion-title class="ion-text-left"> Judul</ion-title>
      <ion-icon :icon="navigate">barat</ion-icon>
      <ion-title class="ion-text-left"> Deskripsi</ion-title>
      <div class="ion-text-left">
        <p>
          penjelasan mengenai wisata
        </p>
      </div>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <img src="assets/icon/favicon.png" />
        </ion-slide>
        <ion-slide>
          <img src="assets/icon/favicon.png" />
        </ion-slide>
      </ion-slides>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26648.164843387858!2d108.19063136167648!3d-6.857798560514725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f0436dc0d17%3A0xbfd45e9dac204617!2sSidamukti%2C%20Kec.%20Majalengka%2C%20Kabupaten%20Majalengka%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1629470348778!5m2!1sid!2sid"
        width="100%"
        height="99%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div class="ion-text-center">
        <ion-button>
          <ion-icon :icon="call" />
          <ion-label>Reservasi</ion-label>
        </ion-button>
      </div>
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
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { navigate, call } from "ionicons/icons";

export default defineComponent({
  name: "Home",
  components: {
    IonSlide,
    IonSlides,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    const slideOpts = {
      initialSlide: 1,
      speed: 400,
    };
    return {
      navigate,
      call,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
