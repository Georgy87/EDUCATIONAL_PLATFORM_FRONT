import React, { Component } from "react";
import Slider from "react-slick";
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
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnFocus: true,

            // variableWidth: true
        };

        const element = this.props.props.map((el) => {
            console.log(el)
            return (
                <div>
                    <img
                        style={{
                            width: "250px",
                            height: "150px",
                            backgroundPosition: "center",
                            margin: "0 auto",
							borderRadius: "5px",
							boxShadow: "0px 1px 2px"
                        }}
                        src={`http://localhost:5000/${el.name}`}
                        alt=""
                    />
                </div>
            );
        });

        return (
            <div style={{ backgroundColor: "white", height: "300px" }}>
                <div
                    style={{
                        width: "1000px",
                        margin: "0 auto",
                        marginTop: "150px",
                        padding: "30px",
                    }}
                >
                    <Slider {...settings}>{element}</Slider>
                    <div className="slider-line"></div>
                </div>
            </div>
        );
    }
}

