import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import CardData from "./Carddata"



export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                img="katie-zaferes.png"
                rating="5.0"
                reviews="6"
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price="From $136"
            />
        </div>
    )
}
