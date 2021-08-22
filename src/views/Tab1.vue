<template>
  <ion-page>
    <ion-header>
      <ion-title class="ion-text-center"
        ><strong>
          Hai Muktikers! <br />Apa Yang Kamu <br />Ingin Lakukan Hari
          Ini?</strong
        ></ion-title
      >
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-title class="ion-text-center"
        >Rekomendasi Wisata Untuk Kamu
      </ion-title>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <img src="assets/icon/favicon.png" />
        </ion-slide>
        <ion-slide>
          <img src="assets/icon/favicon.png" />
        </ion-slide>
      </ion-slides>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-item href="../tabs/page1" class="ion-activated">
                <ion-card-header>
                  <img src="assets/icon/icon.png" />
                  <ion-card-title>Card Title</ion-card-title>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                </ion-card-header>
              </ion-item>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-item href="../tabs/page2" class="ion-activated">
                <ion-card-header>
                  <img src="assets/icon/icon.png" />
                  <ion-card-title>Card Title</ion-card-title>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                </ion-card-header>
              </ion-item>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-item href="#" class="ion-activated">
                <ion-card-header>
                  <img src="assets/icon/icon.png" />
                  <ion-card-title>Card Title</ion-card-title>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                </ion-card-header>
              </ion-item>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-item href="#" class="ion-activated">
                <ion-card-header>
                  <img src="assets/icon/icon.png" />
                  <ion-card-title>Card Title</ion-card-title>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                </ion-card-header>
              </ion-item>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSlides,
  IonSlide,
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default {
  name: "Tab1",
  components: {
    IonGrid,
    IonCol,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSlides,
    IonSlide,
    IonHeader,
    IonTitle,
    IonContent,
    IonPage,
  },

  setup() {
    const slideOpts = {
      initialSlide: 1,
      speed: 400,
    };
    return { slideOpts };
  },
};
</script>

<style scoped>
#center {
  align-content: center;
  position: absolute;
}
</style>
