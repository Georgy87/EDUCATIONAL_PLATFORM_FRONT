import React, { Component } from "react";
import Slider from "react-slick";
import CircularProgress from "@material-ui/core/CircularProgress";
import SliderItems from "./SliderItems/SliderItems";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCourses.css";

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

        const { stateCourses, isLoading } = this.props;
        return (
            <div>
                <div
                    style={{
                        // width: "1200px",
                        margin: "0 auto",
                        marginTop: "150px",
                    }}
                >
                    <Slider {...settings}>
                        {!isLoading &&
                            stateCourses.courses.map((el) => {
                                return <SliderItems props={el} key={el._id} />;
                            })}
                    </Slider>
                    <div className="slider-line"></div>
                </div>
            </div>
        );
    }
}
