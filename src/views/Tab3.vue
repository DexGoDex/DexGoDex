<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section>
        <div class="ion-text-center">
          <img src="assets/img/Illustration.png" />
        </div>
        <div class="ion-text-center">
          <p>
            Untuk informasi lebih lanjut,<br />
            hubungi kontak dibawah ini
          </p>
        </div>
        <div class="ion-text-center">
          <ion-button href="https://wa.me/6285810443581">
            <ion-icon :icon="call" style="margin-right:10px" />
            <ion-label><b>Contact</b></ion-label>
          </ion-button>
        </div>
        <div class="ion-text-center" style="margin-bottom: 25px">
          <small style="color:rgba(58,58,58,40%)"
            >Selain yg ada diaplikasi ini, semuanya penipuan</small
          >
        </div>
        <div class="ion-text-center" id="social-media">
          <p>
            Sosial media kami :
          </p>
          <ion-icon :icon="logoInstagram"></ion-icon>
          <a href="https://www.youtube.com/channel/UC0aVhPHJxTSTfN8_2jrqiNQ">
            <ion-icon :icon="logoYoutube"></ion-icon>
          </a>
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
  logoYoutube,
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
      logoYoutube,
      logoFacebook,
      calculator,
    };
  },
};
</script>
<style scoped>
section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 180px;
}
#social-media ion-icon {
  margin: 0 10px;
  font-size: 24px;
  color: #427aa1;
}
ion-button {
  height: 60px;
  width: 300px;
  --border-radius: 16px;
}
</style>
