import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.1146356065!2d79.92880799953032!3d13.04804380118091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1582835093586!5m2!1sen!2sin" width="100%" height="500px" frameBorder="0"  allowFullScreen></iframe>
             
             <div className="location_tag">
                 <div>Location</div>
             </div>
        </div>
    );
};

export default Location;