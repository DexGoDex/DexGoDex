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
            <ion-item href="../tabs/page2" class="ion-activated">
                <ion-card>
                  <ion-thumbnail>
                    <ion-img src="assets/img/photo.png">
                    </ion-img>
                  </ion-thumbnail>
                <ion-card-header>
                  <ion-card-title><strong>Card Title</strong></ion-card-title>
                  <ion-icon :icon="navigate"></ion-icon>
                  <ion-card-subtitle>sub title</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-item>
          </ion-col>
          <ion-col>
            <ion-item href="../tabs/page2" class="ion-activated">
                <ion-card>
                  <ion-thumbnail>
                    <ion-img src="assets/img/photo.png">
                    </ion-img>
                  </ion-thumbnail>
                <ion-card-header>
                  <ion-card-title><strong>Card Title</strong></ion-card-title>
                  <ion-icon :icon="navigate"></ion-icon>
                  <ion-card-subtitle>sub title</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-item>
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
ion-card {
  border-radius: 20px;
}
p {
  font-size: 14px;
  color: #088b61;
}
green {
  color: green;
}
#header {
  display: flex;
  align-items: center;
}
ion-icon {
  color: #427aa1;
}

ion-thumbnail{
  --size: 100%;
}

ion-item{
  --padding-bottom: none;
  --padding-top:	none;
  --padding-start: none	;
  --padding-end:	none;
  --inner-padding-end:none;
  --inner-padding-start:none;	
  --border-color	: transparent;
}
</style>
