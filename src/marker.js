const mapboxgl = require("mapbox-gl");

const markerMaker = function(descr, coordArr) {

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";

    if (descr === 'activity') {
      markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    } else if (descr === 'hotel') {
      markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    } else if (descr === 'restaurant') {
      markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }

    return new mapboxgl.Marker(markerDomEl).setLngLat(coordArr);
  }



module.exports = markerMaker;
