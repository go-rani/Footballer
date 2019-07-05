import Link from 'next/link';
import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';
import Slider from "react-slick";


class BannerList extends Component {
        
    constructor(props) {
        super(props)

    }

    render() {
        var settings = {
            dots: true
        };
        return (
            <div className="container">
                <Slider {...settings}>
                    <div>
                        <img src="https://placehold.it/500x100" />
                    </div>
                    <div>
                        <img src="https://placehold.it/500x100" />
                    </div>
                    <div>
                        <img src="https://placehold.it/500x100" />
                    </div>
                    <div>
                        <img src="https://placehold.it/500x100" />
                    </div>
                </Slider>
                <style jsx>
                    {`
                        .container {
                            margin: 0 auto;
                            padding: 40px;                            
                            color: #333;
                            background: #419be0;
                          }
                          
                          h3 {
                            background: blue;
                            color: #fff;
                            font-size: 36px;
                            line-height: 100px;
                            margin: 10px;
                            padding: 2%;
                            position: relative;
                            text-align: center;
                          }
                          .variable-width .slick-slide p {
                            background: blue;
                            height: 100px;
                            color: #fff;
                            margin: 5px;
                            line-height: 100px;
                            text-align: center;
                          }
                          .center .slick-center h3 {
                            color: #e67e22;
                            opacity: 1;
                            transform: scale(1.08);
                          }
                          .center h3 {
                            opacity: 0.8;
                            transition: all 300ms ease;
                          }
                          .content {
                            padding: 20px;
                            margin: auto;
                            width: 90%;
                          }
                          .slick-slide .image {
                            padding: 10px;
                          }
                          .slick-slide img {
                            border: 5px solid #fff;
                            display: block;
                            margin: auto;
                          }
                          .slick-slide img.slick-loading {
                            border: 0;
                          }
                          .slick-slider {
                            margin: 30px auto 50px;
                          }
                          .slick-dots {
                            margin-left: 0;
                          }
                          .slick-thumb {
                            bottom: -45px;
                          }
                          .slick-thumb li {
                            width: 60px;
                            height: 45px;
                          }
                          .slick-thumb li img {
                            filter: grayscale(100%);
                          }
                          .slick-thumb li.slick-active img {
                            filter: grayscale(0%);
                          }
                          @media (max-width: 768px) {
                            h3 {
                              font-size: 24px;
                            }
                            .center {
                              margin-left: -40px;
                              margin-right: -40px;
                            }
                            .center .slick-center h3 {
                              color: #e67e22;
                              opacity: 1;
                              transform: scale(1);
                            }
                            .center h3 {
                              opacity: 0.8;
                              transform: scale(0.95);
                              transition: all 300ms ease;
                            }
                          }
                          .slick-vertical .slick-slide {
                            height: 180px;
                          }
                          .slick-arrow {
                            background-color: grey;
                          }
                          .slick-arrow:hover {
                            background-color: grey;
                          }

                          
                    `}
                </style>
            </div>
        )
    }

}
export default BannerList;
