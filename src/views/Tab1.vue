<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section id="header" class="ion-padding">
        <img src="assets/img/logo.png" height="24" style="margin-right:8px" />
        <p style="display:inline-block;font-weight:600;">TOS Mobile</p>
      </section>

      <section class="ion-padding-horizontal">
        <iframe
          width="100%"
          height="180"
          src="https://www.youtube.com/embed/6y5XjmhbiLY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
      </section>
      <section id="subheader" class="ion-padding-horizontal">
        <h1>
          <strong>
            Ayo explore <br />
            <span style="color:#088B61">Sidamukti </span>
          </strong>
        </h1>
      </section>
      <ion-segment mode="ios" value="cagar">
        <ion-segment-button value="cagar" @click="CagarClick($event)">
          <ion-label>Cagar Budaya</ion-label>
        </ion-segment-button>
        <ion-segment-button value="ekowisata" @click="EkowisataClick($event)">
          <ion-label>Ekowisata</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-grid id="cagar">
        <ion-row>
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
        </ion-row>
        <ion-row>
          <ion-col> </ion-col>
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
        </ion-row>
      </ion-grid>
      <ion-grid id="ekowisata" style="display:none">
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
        <ion-row>
          <ion-col
            ><ion-card href="../page6">
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
            </ion-card></ion-col
          >
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
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
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
  IonSegment, 
  IonSegmentButton,
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
    IonSegment, 
    IonSegmentButton,
  },

  methods: {
    CagarClick(event) {
    
      document.getElementById("cagar").style.display = "block";
      document.getElementById("ekowisata").style.display = "none";
    },
    EkowisataClick(event) {
     
      document.getElementById("cagar").style.display = "none";
      document.getElementById("ekowisata").style.display = "block";
    },
  },
  setup() {
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
.hide {
  display: none;
}
ion-grid {
  margin-top: 20px;
}

ion-segment{
  padding: 10px;
  width: 300px;
  margin: auto;
  
}
ion-segment-button{
  --color-checked	: #088b61;
}
</style>
