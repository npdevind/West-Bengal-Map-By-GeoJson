// MapComponent.js
import React, { useState } from "react";
import { TileLayer, GeoJSON, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ districtData }) => {
  const [tooltipContent, setTooltipContent] = useState("");

  const [number, setnumber] = useState(Math.random());

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        setTooltipContent(`${feature.properties.name}: ${number}`);
      },
      mouseout: (e) => {
        setTooltipContent("");
      },
    });
  };

  const getColor = (color) => {
    if (color) return color;
    else return "green";
  };

  const geoJsonStyle = (feature) => {
    return {
      fillColor: getColor(feature.properties.fill_color),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  return (
    <>
      <div>
        <MapContainer
          center={[23.685, 86.9444]}
          zoom={7}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
            top: 0,
            right: 250,
          }}
          maxBoundsViscosity={1.0}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
          boxZoom={false}
          keyboard={false}
        >
          <GeoJSON
            data={districtData}
            onEachFeature={onEachFeature}
            style={geoJsonStyle}
          />
        </MapContainer>
      </div>

      <div className="tooltip">{tooltipContent}</div>
    </>
  );
};

export default MapComponent;
