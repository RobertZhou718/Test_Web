import { storage } from "./config.js";
import {
  ref,
  uploadBytes,
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js";
import { files } from "./ui.js";
import { userEmail } from "./auth.js";

function uploadflie() {
  files.forEach((file) => {
    const filename = file.files[0].name;
    const storageRef = ref(storage, userEmail + "/" + filename);
    console.log(file.files[0].name);
    console.log(userEmail);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  });
}
document.getElementById("upload").addEventListener("click", uploadflie);

function TfExcel() {
  var data = [];
  const taxform = [...document.querySelectorAll(".taxform")];
  taxform.forEach((i) => {
    console.log(i.value);
    if (i.value == "") {
      window.alert("Please Input rhe required form!");
    }
    data.push(i.value);
  });

  downLoadExcel(data, data[0] + ".csv");
}
function downLoadExcel(data, fileName) {
  //定义表头
  let str = `First name,Last name,Date of Birth,SIN#,Email,Phone,Mailing Address,City,Province,Zip,Marital Status,First time tax filling in CA?,Are you a Canadian Citizen,Existing client\n`;
  //增加\t为了不让表格显示科学计数法或者其他格式
  for (let i = 0; i < data.length; i++) {
    str += `${data[i] + "\t"},`;
  }
  console.log(str);
  const storageRef = ref(storage, fileName);
  uploadString(storageRef, str).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
}

document.getElementById("tfbtn").addEventListener("click", TfExcel);
