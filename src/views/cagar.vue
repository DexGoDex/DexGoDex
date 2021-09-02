<template>
  <ionPage>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card href="../page1">
              <ion-thumbnail>
                <ion-img src="assets/img/sirkuit.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title> Sirkuit Roadrace</ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="location"></ion-icon>
                  Majalengka</ion-card-subtitle
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card href="../page2">
              <ion-thumbnail>
                <ion-img src="assets/img/paralayang.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title>Paralayang </ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="location"></ion-icon>
                  Majalengka</ion-card-subtitle
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ionPage>
</template>

<script>
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
import { location } from "ionicons/icons";
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
    return { location };
  },
};
</script>

<style>
ion-card {
  border-radius: 20px;
}
ion-col:nth-child(even) {
  margin-top: 25px;
}
ion-col:nth-child(even) {
  margin-top: -25px;
}
ion-card-title {
  margin-bottom: 5px;
  font-size: 120%;
  font-weight: bold;
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
#subheader {
  margin-bottom: 25px;
}
</style>
