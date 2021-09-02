<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section id="header" class="ion-padding" >
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
            cagar <span style="color:#088B61">Sidamukti </span>
          </strong>
        </h1>
      </section>
      <ion-tabs style="margin-bottom:100px">
        <ion-tab-bar slot="bottom" >
          <ion-tab-button @click="CagarClick()">
            <ion-label>Cagar</ion-label>
          </ion-tab-button>
          <ion-tab-button @click="EkowisataClick()" >
            <ion-label>Ekowisata</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
      <ion-grid id="cagar">
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
            <ion-card href="../page6" >
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

<script >
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
  
  methods:{
    CagarClick(){
      document.getElementById("cagar").style.display = "block";
      document.getElementById("ekowisata").style.display = "none";
    },
    EkowisataClick(){
      document.getElementById("cagar").style.display = "none";
      document.getElementById("ekowisata").style.display = "block";
    }
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
.hide{
  display: none;
}
ion-grid{
  margin-top: 50px;
}

</style>
