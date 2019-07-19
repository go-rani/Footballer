import React, { Component } from 'react';
import Slider from "react-slick";

class ImageList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div className="container">
                <Slider {...settings}>
                    <div>
                        <div style={{backgroundImage:`url(../../static/team_test01.png)`, width:"100%", paddingBottom: "60%", backgroundSize:"cover"}}></div>
                    </div>
                    <div>
                        <div style={{backgroundImage:`url(../../static/team_test02.png)`, width:"100%", paddingBottom: "60%", backgroundSize:"cover"}}></div>
                    </div>
                    <div>
                        <div style={{backgroundImage:`url(../../static/team_test03.png)`, width:"100%", paddingBottom: "60%", backgroundSize:"cover"}}></div>
                    </div>
                    <div>
                        <div style={{backgroundImage:`url(../../static/team_test04.png)`, width:"90%", paddingBottom: "60%", backgroundSize:"cover"}}></div>
                    </div>
                </Slider>
                <style jsx>
                    {`
                        .container {
                            margin: 0 auto;
                            padding: 0;
                            color: #333;
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

export default ImageList;