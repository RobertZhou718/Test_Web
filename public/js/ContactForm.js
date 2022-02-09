const sendEmail = () => {
  let Username = document.getElementById("UserName").value;
  let email = document.getElementById("UserEmail").value;
  let subject = document.getElementById("UserSub").value;
  let message = document.getElementById("UserMess").value;
  const https = new XMLHttpRequest();
  const functionurl =
    "https://us-central1-ninth-glider-325616.cloudfunctions.net/sendMail";
  var url =
    functionurl +
    "?Username=" +
    encodeURI(Username) +
    "&email=" +
    encodeURI(email) +
    "&subject=" +
    encodeURI(subject) +
    "&message=" +
    encodeURI(message);
  console.log(url);
  https.open("GET", url);
  try {
    https.send();
    alert("Sended!");
  } catch (error) {
    alert("Send fail!");
  }
};
document.getElementById("ContactForm").addEventListener("click", sendEmail);
