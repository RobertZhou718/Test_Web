import {
  ref,
  set,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";
import { userEmail } from "./auth.js";
import { db } from "./config.js";

function writeUserData(email, date, time) {
  try {
    get(ref(db, `reservation/` + date + "/" + time))
      .then((snapshot) => {
        if (snapshot.exists()) {
          alert("this time not good");
          throw "this time not good";
        } else {
          set(ref(db, "reservation/" + date.replace(/\W/g, "_") + "/" + time), {
            email: email,
            date: date,
            time: time,
          });
          console.log("Success");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    set(ref(db, "reservation/" + date.replace(/\W/g, "_") + "/" + time), {
      email: email,
      date: date,
      time: time,
    });
    console.log("Success");
  }
}
function Insert() {
  const date = document.querySelector("#datepicker2");
  const time = document.querySelector("#time");
  writeUserData(userEmail, date.value, time.value);
}
document.getElementById("reserve").addEventListener("click", Insert);
