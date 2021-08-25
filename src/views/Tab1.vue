<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section id="header" class="ion-padding">
        <img src="assets/img/logo.png" height="24" style="margin-right:8px" />
        <p style="display:inline-block;font-weight:600;">TOS MOBILE</p>
      </section>

      <section class="ion-padding-horizontal">
        <h1>
          Ayo Explore <br />
          Cagar <span style="color:#088B61">Sidamukti </span>
        </h1>
      </section>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-item href="../tabs/page1" class="ion-activated">
                <ion-card-header>
                  <img src="assets/img/photo.png" />
                  <ion-card-title><strong>Card Title</strong></ion-card-title>
                  <ion-icon :icon="navigate"></ion-icon>
                  <ion-card-subtitle>sub title</ion-card-subtitle>
                </ion-card-header>
              </ion-item>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-item href="../tabs/page2" class="ion-activated">
                <ion-card-header>
                  <img src="assets/img/photo.png" />
                  <ion-card-title><strong>Card Title</strong></ion-card-title>
                  <ion-icon :icon="navigate"></ion-icon>
                  <ion-card-subtitle>sub title</ion-card-subtitle>
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
                  <img src="assets/img/photo.png" />
                  <ion-card-title><strong>Card Title</strong></ion-card-title>
                  <ion-icon :icon="navigate"></ion-icon>
                  <ion-card-subtitle>sub title</ion-card-subtitle>
                </ion-card-header>
              </ion-item>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-item href="#" class="ion-activated">
                <ion-card-header>
                  <img src="assets/img/photo.png" />
                  <ion-card-title><strong>Card Title</strong></ion-card-title>
                  <ion-icon :icon="navigate"></ion-icon>
                  <ion-card-subtitle>sub title</ion-card-subtitle>
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
#center {
  align-content: center;
  position: absolute;
}
ion-card {
  border-radius: 20px;
}
p {
  font-size: 14px;
}
green {
  color: green;
}
#header {
  display: flex;
  align-items: center;
}
</style>
