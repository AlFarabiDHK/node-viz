import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function BasicButton(props) {
    return (
        <button>{
            props.text
        }</button>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (
    <BasicButton text="Hello"/>
);
