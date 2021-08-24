<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <section id="header">
          <img src="assets/Images/logo.png" height="24" style="margin-right:8px" /> 
          <p style="display:inline-block;font-weight:600;">TOS MOBILE</p>
        </section>
        <div class="ion-text-left">
          <h1>
          Ayo Explore <br />
          Cagar Sidamukti
          </h1>
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
p{
  font-size: 14px;
}
green {
  color: green;
}
#header{
  display: flex;
  align-items: center;
}
</style>
