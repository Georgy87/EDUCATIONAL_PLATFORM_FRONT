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
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnFocus: true,
            // variableWidth: true
        };

        const element = this.props.props.map((el) => {
            console.log(el._id);
            return (
                <div key={el._id}>
                    <div  className="my-settings-slider">
                        <img
                            style={{
                                width: "250px",
                                height: "150px",
                                backgroundPosition: "center",
                                margin: "0 auto",
                                borderRadius: "4px",
                            }}
                            src={`http://localhost:5000/${el.name}`}
                            alt=""
                        />
                        <div className="my-settings-slider-items">
                            <div className="my-settings-slider-item" style={{fontWeight: "Bold"}}>{el.profession}</div>
                            <div className="my-settings-slider-item-descr">{el.author}</div>
                            <div className="my-settings-slider-item">{`Цена: ${el.price} руб`}</div>
                        </div>
                    </div>
                </div>
            );
        });


        return (
            <div className="items" style={{ backgroundColor: "white", height: "300px" }}>
                <div
                    style={{
                        minWidth: "100%",
                        margin: "0 auto",
                        marginTop: "150px",
                        // padding: "30px",
                    }}
                >
                    <Slider  {...settings}>{element}</Slider>
                    <div className="slider-line"></div>
                </div>
            </div>
        );
    }
}

