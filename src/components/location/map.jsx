import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    // Carrega a API JavaScript do Google Maps
    const loadMapScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.defer = true;
      script.async = true;
      document.head.appendChild(script);
    };

    // Inicializa o mapa quando a API estiver carregada
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      // Exemplo: Adiciona um marcador no mapa
      const marker = new window.google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: "Meu marcador",
      });
    };

    loadMapScript();
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "400px" }}>
      Carregando mapa...
    </div>
  );
};

export default Map;
