<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title size="Large"
          ><strong>
            Hai Muktikers <br />Apa yang kamu <br />kepoin hari ini?</strong
          ></ion-title
        >
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <h1><div id="center">news untuk kamu ini</div></h1>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <img src="assets/icon/favicon.png" />
        </ion-slide>
        <ion-slide>
          <img src="assets/icon/favicon.png" />
        </ion-slide>
      </ion-slides>

      <ion-grid>
        <ion-col>
          <ion-row>
            <ion-card color="secondary">
              <ion-card-header>
                <img src="assets/icon/icon.png" />
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Keep close to Nature's heart... and break clear away, once in
                awhile, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.
              </ion-card-content>
            </ion-card>
          </ion-row>
        </ion-col>
        <ion-col>
          <ion-row>
            <ion-card color="secondary">
              <ion-card-header>
                <img src="assets/icon/icon.png" />
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Keep close to Nature's heart... and break clear away, once in
                awhile, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.
              </ion-card-content>
            </ion-card>
          </ion-row>
        </ion-col>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSlides,
  IonSlide,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default {
  name: "Tab1",
  components: {
    IonGrid,
    IonRow,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSlides,
    IonSlide,
    IonHeader,
    IonToolbar,
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
