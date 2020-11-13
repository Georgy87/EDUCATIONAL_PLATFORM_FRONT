import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCourses.css";
import SliderItems from "./SliderItems/SliderItems";
export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const settings = {
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnFocus: true,
            // variableWidth: true
        };
        console.log(this.props);
        const element = this.props.props.map((el) => {
            console.log(el)
            return <SliderItems props={el} key={el._id} />;
        });

        return (
            <div
                className="items"
                style={{ backgroundColor: "white", height: "300px" }}
            >
                <div
                    style={{
                        minWidth: "100%",
                        margin: "0 auto",
                        marginTop: "150px",
                    }}
                >
                    <Slider {...settings}>{element}</Slider>
                    <div className="slider-line"></div>
                </div>
            </div>
        );
    }
}
