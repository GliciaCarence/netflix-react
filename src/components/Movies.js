import React from "react";

const Movies = ({ images }) => {
    return (
        <div className="container">
            {images.map((entry, index) => {
                return (
                    <img className="gallery" key={index} src={entry} alt="" />
                );
            })}
        </div>
    );
};

export default Movies;
