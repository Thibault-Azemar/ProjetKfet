
<template>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.debug.js"></script>
  <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/2.3.4/jspdf.plugin.autotable.min.js"></script>
  <script src="https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js"></script>
  <h1> ceci est un h1 </h1>
  <h2> ceci est un h2 </h2>
  <h3> ceci est un h3 </h3>
  <button class="primary-button">Valider</button>
  <button class="secondary-button">Annuler</button>
  <button class="tertiary-button"></button>
  <button class="delete-button">Supprimer</button>
  <input type="text" class="search">
  <label>Choose a pet:</label>
  <select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
    <div id="QRCodeImg" ></div>
  </select>
  <button class="icon-button"><img src="../assets/pictures/user.svg"></button>
</template>

<script>
import test from '../services/test'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Test',
  data() {
    return {
      test
    }
  },
  methods: {
    exportShow(idPopUp) {
      document.getElementById("show-export").style.display = "none";

      if (idPopUp === "QRCodePopUp") {
        const qrCode = new QRCodeStyling({
          width: 300,
          height: 300,
          type: "svg",
          data: "https://www.facebook.com/",
          dotsOptions: {
            color: "#4267b2",
            type: "rounded"
          },
          backgroundOptions: {
            color: "#e9ebee",
          },
          imageOptions: {
            crossOrigin: "anonymous",
            margin: 20
          }
        });

        qrCode.append(document.getElementById("QRCodeImg"));
        //document.getElementById("QRCodeImg").src = "https://api.qrserver.com/v1/create-qr-code/?data="+ window.location.href //+";size=100x100";
      }

      if (idPopUp === "LinkPopUp") document.getElementById("link").innerHTML = window.location.href;
      document.getElementById(idPopUp).style.display = "flex";
    };

  },
  created() {
  }
}


</script>
