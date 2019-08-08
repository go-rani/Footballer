import React, { Component } from 'react';

class StripBanner extends Component {
    constructor(props, context) {
        super(props, context)

    }

    render() {
        return (
            <div>
                <div className="banner_wrap">
                    <div className="text_wrap">
                        <p>풋볼러에 트레이닝을 등록해보세요 ></p>
                    </div>
                </div>
                <style jsx>
                    {`
                        .text_wrap {
                            // background: url(https://www.lifeplus.co.kr/_resource/_mobile/images/service/service_bg4.jpg) no-repeat center 30%;
                            // background-image: url(null);
                            // background-color: #C9CEE4;
                            // background-size: 100%;
                            // background-image: linear-gradient(141deg,#3897F0 15%,#ABDCFF);
                            background-image: linear-gradient(141deg, #81a8cb, #cde6f9);
                        }

                        p {
                            margin: 0px;
                            padding: 30px 20px;
                            font-size: 15px;
                            color: #fff;
                            line-height: 20px;
                            background-color: rgba(0,0,0,.5);
                        }  
                    `}
                </style>
            </div>
        )
    }
}

export default StripBanner;