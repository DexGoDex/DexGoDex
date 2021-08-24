<template>
  <ion-page>
    <ion-content :fullscreen="true">
      
    
      <div class="ion-text-center">
        <img src="assets/image/illustration.png" />
        <p>
          Untuk melakukan reservasi,<br />
          hubungi kontak dibawah ini
        </p>
      </div>
      <div class="ion-text-center">
        <ion-button>
          <ion-icon :icon="call" />
          <ion-label>Reservasi</ion-label>
        </ion-button>
      </div>
      <div class="ion-text-center">
        <p>Selain yg ada diaplikasi ini, <br />semuanya penipuan</p>
      </div>
      <div class="ion-text-center">
        <p>
          Sosial media kami :
        </p>
        <ion-icon :icon="logoInstagram"></ion-icon>
        <ion-icon :icon="logoTwitter"></ion-icon>
        <ion-icon :icon="logoFacebook"></ion-icon>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonTitle, IonContent } from "@ionic/vue";
import {
  call,
  logoInstagram,
  logoTwitter,
  logoFacebook,
  calculator,
} from "ionicons/icons";

export default {
  name: "Tab3",
  components: {
    IonHeader,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    return {
      call,
      logoInstagram,
      logoTwitter,
      logoFacebook,
      calculator,
    };
  },
};
</script>
