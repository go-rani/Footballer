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
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
        };
        return (
            <div className="container">
                <Slider {...settings}>
                    <div>
                      <h4>딱 맞는 트레이닝 찾고, 스킬업! 레벨업!</h4>
                    </div>
                    <div>
                      <h4>뭉쳐야 찬다! 우리 동네 축구, 풋살 팀은?</h4>
                    </div>
                    <div>
                      <h4>축구, 풋살 동호회 간편히 관리하자!</h4>
                    </div>
                </Slider>
                <style jsx>
                    {`
                        .container {
                            margin: 0 auto;
                            color: #333;
                            padding: 0px;
                          }
                          
                          h4 {
                            font-size: 18px;
                            font-weight: bold;
                            line-height: 60px;
                            position: relative;
                            text-align: center;
                          }
                          
                          }
                          .slick-dots li button:before
                          {
                              font-size: 10px;
                              line-height: 10px;
                          }

                          
                    `}
                </style>
            </div>
        )
    }

}
export default BannerList;
