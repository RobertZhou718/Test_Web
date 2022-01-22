import { storage } from "./config.js";
import { ref } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js";
const storageRef = ref(storage, "file/file.pdf");

function uploadflie() {
  let file = document.querySelectorAll("formfile");
  console.log(file);
  let thisRef = storageRef.child(file.name);

  thisRef
    .put(file)
    .then((res) => {
      console.log("Upload Success");
      alert("Upload Success");
    })
    .catch((e) => {
      console.log("Erroe" + e);
    });
}
document.getElementById("upload").addEventListener("click", uploadflie);
