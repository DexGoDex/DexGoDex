<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title class="ion-text-center">
            Untuk melakukan reservasi, hubungi kontak dibawah ini</ion-title
          >
        </ion-toolbar>
      </ion-header>
      <div class="ion-text-center">
        <img src="/assets/images/illustration.png" />
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
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonTitle, IonContent } from "@ionic/vue";
import { call, logoInstagram, logoTwitter, logoFacebook } from "ionicons/icons";

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
    };
  },
};
</script>
