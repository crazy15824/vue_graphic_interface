import { Workbox } from "workbox-window";

let wb;

if ("serviceWorker" in navigator) {
  wb = new Workbox("service-worker.js");

  // Assuming the user accepted the update, the listener
  // will reload the page as soon as the previously waiting
  // service worker is activated and has taken control.
  wb.addEventListener("controlling", () => {
    console.log("new content, reload!!")
    window.location.reload();
  });

  // Register the service worker after event listeners have been added.
  wb.register();
} else {
  wb = null;
}

export default wb;