<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section>
        <div class="ion-text-center">
          <img src="assets/img/LogoUhamka.jpeg" />
        </div>
      </section>
      <section>
        <div class="ion-text-center">
          <h5>
            <strong><span style="color:#088B61">About Us</span></strong>
          </h5>
        </div>
        <div class="ion-padding-horizontal">
          <p>
            Aplikasi TOS-Mobile adalah aplikasi yang dirancang untuk mempermudah
            masyarakat dalam mencari informasi terkait wisata dan cagar budaya
            yang berada di Desa Sidamukti, Majalengka. Aplikasi ini dibuat oleh
            Tim dari Universitas Muhammadiyah Prof. Dr. Hamka dengan
            pembimbingan dosen yaitu Mubarak Ahmad, M. Pd dan Dr. Jumardi, M.
            Pd. Selain itu, juga terdapat mahasiswa yang membantu dalam
            pembuatan aplikasi ini diantaranya Barokah Asmaul Husna, Gery
            Erlangga, Gheifira Aprisa Wardhantari, Herdin Muhtarom, Rahmah
            Faradilla, Tarisya Aulia, Amir Syawaludin, dan Muhammad Akbar
            Maulana Rahmat. Semoga aplikasi ini dapat membantu masyarakat dalam
            mencari informasi untuk berwisata dan menambah wawasan masyarakat.
          </p>
        </div>
      </section>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 180px;
}
p {
  text-align: justify;
}
</style>
