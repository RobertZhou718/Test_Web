import { storage,ref } from "./config.js";

let storageRef = firebase.storage().ref('file')

function uploadData(){
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