<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section id="header" class="ion-padding">
        <img src="assets/img/logo.png" height="24" style="margin-right:8px" />
        <p style="display:inline-block;font-weight:600;">TOS Mobile</p>
      </section>
      <section id="subheader" class="ion-padding-horizontal">
        <h1>
          <strong>
            Ayo explore <br />
            cagar <span style="color:#088B61">Sidamukti </span>
          </strong>
        </h1>
      </section>
      <section class="ion-padding-horizontal">
        <ion-slides :options="slideOpts">
          <ion-slide class="">
            <div>
              <iframe
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/6y5XjmhbiLY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ion-slide>
          <ion-slide>
            <iframe
              width="80%"
              height="180"
              src="https://www.youtube.com/embed/wSmy_jd4TeU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ion-slide>
        </ion-slides>
        <br />
      </section>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card href="../page1">
              <ion-thumbnail>
                <ion-img src="assets/img/sirkuit.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title> Sirkuit Cibatu</ion-card-title>
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
        <ion-row>
          <ion-col>
            <ion-card href="../page3">
              <ion-thumbnail>
                <ion-img src="assets/img/karang.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title>Gunung Karang</ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="location"></ion-icon>
                  Majalengka</ion-card-subtitle
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card href="../page4">
              <ion-thumbnail>
                <ion-img src="assets/img/seni.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title>Sanggar Seni</ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="location"></ion-icon>
                  Majalengka</ion-card-subtitle
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card href="../page5">
              <ion-thumbnail>
                <ion-img src="assets/img/panten.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title>Gunung Panten</ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="location"></ion-icon>
                  Majalengka</ion-card-subtitle
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card href="../page6">
              <ion-thumbnail>
                <ion-img src="assets/img/pasar.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title>Pasar Wisata</ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="location"></ion-icon>
                  Majalengka</ion-card-subtitle
                >
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col> </ion-col>
          <ion-col>
            <ion-card href="../page7">
              <ion-thumbnail>
                <ion-img src="assets/img/arumjeram.png"> </ion-img>
              </ion-thumbnail>
              <ion-card-header>
                <ion-card-title>Arum Jeram</ion-card-title>
                <ion-card-subtitle
                  ><ion-icon :icon="location"></ion-icon>
                  Majalengka</ion-card-subtitle
                >
              </ion-card-header>
            </ion-card>
            `
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
    const slideOpts = {
      speed: 400,
      slidesPerView: 1.5,
      spaceBetween: 15,
      ionSlideTap: () => {
        console.log("hello");
      },
    };
    return { location };
  },
};
</script>

<style scoped>
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
ion-slide img {
  border-radius: 16px;
}
</style>
