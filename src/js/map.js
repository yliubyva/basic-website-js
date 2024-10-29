"use strict";

const lat = 40.67396622964864;
const lon = -73.96277562292426;

const map = L.map("map").setView([lat, lon], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 60,
}).addTo(map);

L.marker([lat, lon])
  .addTo(map)

const customCssIcon = L.divIcon({
  className: "custom-pin",
  iconSize: [106, 106],
  iconAnchor: [15, 42],
  popupAnchor: [0, -42],
});
L.marker([51.5, -0.09], { icon: customCssIcon }).addTo(map)
    .bindPopup("We are here!")
    .openPopup();


map.scrollWheelZoom.disable();
map.on("click", function () {
  map.scrollWheelZoom.enable();
});
map.on("mouseout", function () {
  map.scrollWheelZoom.disable();
});

export { map };