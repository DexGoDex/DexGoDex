<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section id="header" class="ion-padding">
        <img src="assets/img/logo.png" height="24" style="margin-right:8px" />
        <p style="display:inline-block;font-weight:600;">TOS Mobile</p>
      </section>
      <section class="ion-padding-horizontal">
        <h1>
          <strong>
            Ayo explore <br />
            cagar <span style="color:#088B61">Sidamukti </span>
          </strong>
        </h1>
      </section>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card href="../tabs/page1">
              <ion-thumbnail>
                <ion-img src="assets/img/photo.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title>Gunung Punten</ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="navigate"></ion-icon>
                  Barat</ion-card-subtitle
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card href="../tabs/page2">
              <ion-thumbnail>
                <ion-img src="assets/img/paralayang.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title>Paralayang</ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="navigate"></ion-icon>
                  Barat</ion-card-subtitle
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card href="../tabs/page1">
              <ion-thumbnail>
                <ion-img src="assets/img/paralayang.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="navigate"></ion-icon>
                  Barat</ion-card-subtitle
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card href="../tabs/page2">
              <ion-thumbnail>
                <ion-img src="assets/img/content-video.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="navigate"></ion-icon>
                  Barat</ion-card-subtitle
                >
              </ion-card-header>
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
  IonPage,
  IonContent,
} from "@ionic/vue";
import { navigate } from "ionicons/icons";

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
    IonContent,
    IonPage,
  },

  setup() {
    return { navigate };
  },
};
</script>

<style scoped>
ion-card {
  border-radius: 20px;
}
ion-card-title {
  margin-bottom: 5px;
}

p {
  font-size: 14px;
  color: #088b61;
}

#header {
  display: flex;
  align-items: center;
}
ion-icon,
ion-card-subtitle {
  color: #427aa1;
}

ion-thumbnail {
  --size: 100%;
}
ion-card-title {
  font-size: 120%;
  font-weight: bold;
}
</style>
