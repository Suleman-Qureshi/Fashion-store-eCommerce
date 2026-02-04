"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


export default function ClientMap() {
  return (
    <MapContainer
      center={[33.6844, 73.0479]}
      zoom={13}
      style={{ height: "400px", width: "100%", zIndex:0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
    </MapContainer>
  );
}