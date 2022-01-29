function translateEn() {
  document.cookie = "firebase-country-override=ca";
  document.cookie = "firebase-language-override=en";
  window.location.reload();
  console.log(document.cookie);
}
function translateZh() {
  document.cookie = "firebase-country-override=cn";
  document.cookie = "firebase-language-override=zh";
  window.location.reload();
  console.log(document.cookie);
}
document.getElementById("English").addEventListener("click", translateEn);
document.getElementById("Chinese").addEventListener("click", translateZh);
