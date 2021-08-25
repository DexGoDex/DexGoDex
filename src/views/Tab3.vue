<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section>
        <div class="ion-text-center">
          <img src="assets/img/Illustration.png"> 
        </div>
        <div class="ion-text-center">
          <p>
            Untuk melakukan reservasi,<br />
            hubungi kontak dibawah ini
          </p>
        </div>
        <div class="ion-text-center">
          <ion-button >
            <ion-icon :icon="call" style="margin-right:10px" />
            <ion-label><b>Reservasi</b></ion-label>
          </ion-button>
        </div>
        <div class="ion-text-center"  style="margin-bottom: 25px">
          <small style="color:rgba(58,58,58,40%)">Selain yg ada diaplikasi ini, semuanya penipuan</small>
        </div>
        <div class="ion-text-center" id="social-media">
          <p>
            Sosial media kami :
          </p>
          <ion-icon :icon="logoInstagram"></ion-icon>
          <ion-icon :icon="logoTwitter"></ion-icon>
          <ion-icon :icon="logoFacebook"></ion-icon>
        </div>
      </section>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
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
    IonPage,
    IonContent,
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
<style>
section{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
ion-img {
  width: 50%;
}
#social-media ion-icon{
  margin: 0 10px;
  font-size: 24px;
  color: #088b61;
}
ion-button{
  height: 60px;
  width: 300px;
  --border-radius	: 16px;
}
</style>
