import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [index, setIndex] = useState(0)
    const n = images.length

    const handleLeft = () => {
        let i = index
        setIndex(
            i == 0 ? n - 1 : i - 1
        )
    }

    const handleRight = () => {
        let i = index
        setIndex(
            i == n - 1 ? 0 : i + 1 
        )
    }

    return (
        <>
        <h1>Kalvi Image Gallery</h1>
        <div className="gallery">
            <div className="left" onClick={handleLeft}>
                <ArrowBackIosIcon/>
            </div>
            <div className="pic" style={{ backgroundImage: `url('${images[index].img}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <h2>{images[index].title}</h2>
                <h4>{images[index].subtitle}</h4>
                
            </div>
            <div className="right" onClick={handleRight}>
                <ArrowForwardIosIcon/>
            </div>
        </div>
        <h3>Made by Ananya :)</h3>
        </>
    )
}

export default Carousel;