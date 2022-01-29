// const sendEmail = () => {
//   let Username = document.getElementById("UserName").value;
//   let email = document.getElementById("UserEmail").value;
//   let subject = document.getElementById("UserSub").value;
//   let message = document.getElementById("UserMess").value;
//   const https = new XMLHttpRequest();
//   const functionurl =
//     "http://localhost:5001/ninth-glider-325616/us-central1/sendMail";
//   var url =
//     functionurl +
//     "?Username=" +
//     encodeURI(Username) +
//     "&email=" +
//     encodeURI(email) +
//     "&subject=" +
//     encodeURI(subject) +
//     "&message=" +
//     encodeURI(message);
//   console.log(url);
//   https.open("GET", url);
//   https.send();
// };
// document.getElementById("ContactForm").addEventListener("click", sendEmail);
