import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
                img="../images/image-1.png"
                rating="5.0"
                reviews="6"
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price="From $136" 
            />
        </div>
    )
}
