document.addEventListener("DOMContentLoaded", function(event) {
  ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [57.047746, 53.994770],
      zoom: 13.5,
      controls: []
    });

    myPlacemark = new ymaps.Placemark([57.061645, 53.997435], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/map-pin.png',
      iconImageSize: [70, 90],
      iconImageOffset: [-33, -80]
    });

    myPlacemark2 = new ymaps.Placemark([57.032248, 53.989108], {}, {
          iconLayout: 'default#image',
          iconImageHref: '/img/map-pin.png',
          iconImageSize: [70, 90],
          iconImageOffset: [-33, -80]
        });
    myMap.geoObjects.add(myPlacemark);
     myMap.geoObjects.add(myPlacemark2);
  }
});
