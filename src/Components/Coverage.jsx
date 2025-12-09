import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const ChangeMapView = ({ center }) => {
  const map = useMap();
  map.setView(center, 10); // zoom level 10
  return null;
};

const Coverage = () => {
  const defaultPosition = [23.685, 90.3563];
  const data = useLoaderData();

  const [filtered, setFiltered] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value.toLowerCase().trim();

    if (!location) return;

    // Search by district OR covered_area
    const found = data.find(
      (item) =>
        item.district.toLowerCase() === location ||
        item.covered_area.some((area) => area.toLowerCase() === location)
    );

    setFiltered(found || "not-found");
  };

  return (
    <div className="shadow-2xl p-5 my-7 rounded-lg">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
        We are available in 64 districts
      </h2>

      {/* Search box */}
      <form onSubmit={handleSearch} className="mb-5">
        <label className="input flex items-center gap-3">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            name="location"
            type="search"
            className="grow"
            placeholder="Search district/area"
          />
        </label>
      </form>

      {/* Map */}
      <div className="h-[500px]">
        <MapContainer
          center={defaultPosition}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[500px]"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* If searched location found → zoom map */}
          {filtered && filtered !== "not-found" && (
            <ChangeMapView center={[filtered.latitude, filtered.longitude]} />
          )}

          {/* Show all markers OR only searched one */}
          {(filtered && filtered !== "not-found" ? [filtered] : data).map(
            (service, index) => (
              <Marker
                key={index}
                position={[service.latitude, service.longitude]}
              >
                <Popup>
                  <strong>{service.district}</strong> <br />
                  Service Area: {service.covered_area.join(", ")}
                </Popup>
              </Marker>
            )
          )}
        </MapContainer>
      </div>

      {/* Not Found Message */}
      {filtered === "not-found" && (
        <p className="text-red-500 font-semibold mt-3">
          ❌ No district or area found!
        </p>
      )}
    </div>
  );
};

export default Coverage;
