import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13417.8446536285!2d-96.7992399!3d32.7800294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9073cfe6d9a606a!2sMagnolia%20Dallas%20Downtown!5e0!3m2!1sen!2sus!4v1617296520344!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
