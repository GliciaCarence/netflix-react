import React from "react";
import Movies from "./Movies";
import Title from "./Title";

const Section = ({ title, images }) => {
    return (
        <section>
            <Title title={title} />
            <Movies images={images} />
        </section>
    );
};

export default Section;
