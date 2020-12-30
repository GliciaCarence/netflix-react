import React from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./data.json";

const App = () => {
    return (
        <div>
            <Header />
            {data.map((entry, index) => {
                return (
                    <Section
                        key={index}
                        title={entry.category}
                        images={entry.images}
                    />
                );
            })}
        </div>
    );
};

export default App;
