<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section>
        <div class="ion-text-center">
          <img src="assets/img/Illustration.png" />
        </div>
        <div class="ion-text-center">
          <h5>
            Untuk informasi lebih lanjut,<br />
            hubungi kontak dibawah ini:
          </h5>
          <p>
            1. Kepala Desa Selaku Penanggjung Jawab Desa Sidamukti<br />
            2. Pak Iwa Selaku Penanggjung Jawab Lembaga Adat Desa<br />
            3. Pak Umi Selaku Penyimpan Data Informasi Wisata dan Adat Desa
          </p>
        </div>
        <div class="ion-text-center">
          <ion-button href="https://wa.me/6281381534744">
            <ion-icon :icon="call" style="margin-right:10px" />
            <ion-label><b>Hubungi Kepala Desa</b></ion-label>
          </ion-button>
        </div>
        <div class="ion-text-center">
          <ion-button href="https://wa.me/6285322071111">
            <ion-icon :icon="call" style="margin-right:10px" />
            <ion-label><b>Hubungi Pak Iwa</b></ion-label>
          </ion-button>
        </div>
        <div class="ion-text-center">
          <ion-button href="https://wa.me/6282216370078">
            <ion-icon :icon="call" style="margin-right:10px" />
            <ion-label><b>Hubungi Pak Umi</b></ion-label>
          </ion-button>
        </div>
        <div class="ion-text-center" style="margin-bottom: 25px">
          <small style="color:rgba(58,58,58,40%)"
            >Selain yg ada diaplikasi ini, semuanya penipuan</small
          >
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
  height: 130%;
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
p {
  text-align: left;
}
</style>
