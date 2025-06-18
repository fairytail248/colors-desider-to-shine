import React from "react";
import padsData from "./data/pads";
import Pad from "./components/pad";
import './App.css'

export default function App() {
    const [pads, setPads] = React.useState(padsData);

    function toggle() {
        console.log("Clicked!");
    }

    const buttonElements = pads.map(pad => (
        <Pad 
            key={pad.id}
            color={pad.color}
            on={pad.on}
            toggle={toggle}
        />
    ));

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    );
}
