import { storage } from "./config.js";
import {
  ref,
  uploadBytes,
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js";
import { files } from "./ui.js";
import { userEmail } from "./auth.js";

function TfExcel() {
  var data = [];
  var data1 = [];
  const taxform = [...document.querySelectorAll(".taxform")];
  const liveform = [...document.querySelectorAll(".pd")];
  taxform.forEach((i) => {
    console.log(i.value);
    if (i.value == "") {
      alert("Please Input rhe required form!");
      throw "Please Input rhe required form!";
    }
    data.push(i.value);
  });
  liveform.forEach((j) => {
    console.log(j.value);
    if (j.value == "") {
      //window.alert("Please Input rhe required form!");
    }
    data1.push(j.value);
  });

  downLoadExcel(data, data1, data[0] + ".csv");
}
function downLoadExcel(data, data1, fileName) {
  //定义表头
  let str = `First name,Last name,Date of Birth,SIN#,Email,Phone,Mailing Address,City,Province,Zip,Marital Status,First time tax filling in CA?,Are you a Canadian Citizen,Existing client\n`;
  //增加\t为了不让表格显示科学计数法或者其他格式
  for (let i = 0; i < data.length; i++) {
    str += `${data[i] + "\t"},`;
  }
  str += `\nMailing Address,Moving in,Rental paid/Property tax,Landlord name,Residence Type\n`;
  for (let j = 0; j < data1.length; j++) {
    str += `${data1[j] + "\t"},`;
    if (j % 5 == 4) {
      str += `\n`;
    }
  }
  console.log(str);
  //console.log(userEmail);

  const storageRef = ref(storage, userEmail + "/" + fileName);

  uploadString(storageRef, str).then((snapshot) => {
    // console.log("Uploaded a blob or file!");
  });
}
function uploadflie() {
  TfExcel();
  files.forEach((file) => {
    if (file.files[0]) {
      const filename = file.files[0].name;
      const storageRef = ref(storage, userEmail + "/" + filename);
      console.log(file.files[0].name);
      //console.log(userEmail);
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        alert("Submit Success!");
      });
    }
  });
}

document.getElementById("upload").addEventListener("click", uploadflie);
