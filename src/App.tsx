import React from "react";
import "./App.css";
import { Gentleman } from "./components/gentleman";
import { Info } from "./components/info";

function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="main-header">
                    <h1 className="main-title">The pointing gentlemen</h1>
                </header>
                <Info></Info>
                <main className="main">
                    <ul className="gentlemen">
                        <Gentleman></Gentleman>
                    </ul>
                </main>
            </div>
        </div>
    );
}

export default App;
