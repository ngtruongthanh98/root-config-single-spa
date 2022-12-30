import { registerApplication, start } from "single-spa";

if (!window.reactApp) {
  throw Error("Please run react-app");
}

if (!window.vueApp) {
  throw Error("Please run vue-app");
}

if (!window.angularApp) {
  throw Error("Please run angular-app");
}

registerApplication({
  name: "react-app",
  app: window.reactApp,
  activeWhen: ["/"],
});

registerApplication({
  name: "vue-app",
  app: window.vueApp,
  activeWhen: ["/"],
});

registerApplication({
  name: "angular-app",
  app: window.angularApp,
  activeWhen: ["/"],
});

start();
