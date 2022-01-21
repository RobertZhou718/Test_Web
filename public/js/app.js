import{auth,storage}from "./config.js"
import {ref} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js"

const storageRef = ref(storage, "file/file.pdf");
loginDiv = document.getElementById(loginDiv);
userInfo = document.getElementById(userInfo);

function showLogindiv(){
  userInfo.style.display = 'none'
  loginDiv.style.display = 'block'

};
function showLoginState(){
  userInfo.style.display = 'block'
  loginDiv.style.display = 'none'
  userInfo.innerHTML = `You're loggged in as ${user.displayName} (uid: ${user.uid},email: ${user.email})`
};

function uploadflie(){
    let file = document.getElementById('file').files[0]
    console.log(file)

    let thisRef = storageRef.child(file.name)

    thisRef.put(file).then(res=>{
      console.log('Upload Success')
      alert('Upload Success')
    }).catch(e=>{
      console.log('Erroe' + e)
    })
}
document.getElementById("upload").addEventListener("click", uploadflie);
onAuthStateChanged(auth,user=>{
  if(user){
    
    showLoginState();
  }else{
    showLogindiv();
  }
})
