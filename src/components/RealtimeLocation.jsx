import  { useEffect } from "react";

const LocationComponent = () => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported in this browser");
    }
  }, []);

  return (
    <div>
      <h2>Real-Time Location</h2>
      {/* Display location information here */}
    </div>
  );
};

export default LocationComponent;
