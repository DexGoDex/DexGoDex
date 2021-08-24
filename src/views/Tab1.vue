<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="img">
        <img src="assets/Images/logo.png" />
      </div>
      <div class="ion-text-top-center-left">
        <ion-title><strong>TOS MOBILE</strong></ion-title>
      </div>
      <div class="ion-text-left">
        <p>
          Ayo Explore <br />
          Cagar Sidamukti
        </p>
      </div>
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
  IonPage,
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
    IonTitle,
    IonContent,
    IonPage,
  },

  setup() {
    return {};
  },
};
</script>

<style scoped>
#center {
  align-content: center;
  position: absolute;
}
ion-card {
  border-radius: 50px;
}
#img {
  padding: 0px;
  width: 50px;
}
p {
  padding: 20px;
  font-size: 36px;
  font-weight: bold;
}
green {
  color: green;
}
</style>
