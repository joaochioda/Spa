import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mc/react-route",
  app: () => System.import("@mc/react-route"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@mc/react-header",
  app: () => System.import("@mc/react-header"),
  activeWhen: ["/"],
});

//we are import parcel insite route
// registerApplication({
//   name: "@mc/react-parcel",
//   app: () => System.import("@mc/react-parcel"),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
