import React, { Component } from 'react';
import Link from 'next/link';
import EventList from '../main/EventList_copy';
import Slider from "react-slick";


class CompanyMain extends Component {
    constructor(props, context) {
        super(props, context)

    }

    render() {
        var settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div>
                <div className="company_wrap">
                    <div className="intro_wrap">
                        <div className="text_wrap">
                            <p className="title">새로운 연결, 더 나은 세상</p>
                            <p>매일의 삶을 살면서 만나는 수많은 선택과 경험으로 <br />더 나은 우리가 될 수 있기를 바라는 마음을 담은 풋볼러</p>
                        </div>
                        <div className="img_wrap">
                            <img src="/static/footballer_company.png" alt="main" />
                        </div>
                    </div>
                    <div className="detail_wrap">
                        <div className="section detail_01">
                            <div className="text_wrap">
                                <p className="title">01. 트레이닝</p>
                                <p>매일의 삶을 살면서 만나는 수많은 선택과 경험으로 <br />더 나은 우리가 될 수 있기를 바라는 마음을 담은 풋볼러</p>
                                <div className="link">
                                    <Link href="/teachList"><span>트레이닝 바로가기></span></Link>
                                    <span>트레이닝 등록하기></span>
                                </div>
                            </div>
                            <div className="img_wrap">
                                <img src="/static/footballer_company.png" alt="main" />
                            </div>
                        </div>
                        <div className="section detail_02">
                            <div className="text_wrap">
                                <p className="title">02. 팀찾기</p>
                                <p>매일의 삶을 살면서 만나는 수많은 선택과 경험으로<br />더 나은 우리가 될 수 있기를 바라는 풋볼러</p>
                                <div className="link">
                                    <Link href="/teamList"><span>팀찾기 바로가기></span></Link>
                                    <span>팀 등록하기></span>
                                </div>
                            </div>
                            <div className="img_wrap">
                                <img src="/static/footballer_company.png" alt="main" />
                            </div>
                        </div>
                    </div>
                    <div className="detail_box">
                        <div className="box">
                            <div className="container">
                                <Slider {...settings}>
                                    <div>
                                        <img src="/static/company_device01.png" alt="main" />
                                    </div>
                                    <div>
                                        <img src="/static/company_device01.png" alt="main" />
                                    </div>
                                    <div>
                                        <img src="/static/company_device01.png" alt="main" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sns_wrap">
                    <div className="text_wrap">
                        <p className="title">SNS Channel</p>
                        <p><span>FOOTBALLER</span> 의 더 많은 이야기를 만나 보세요.</p>
                    </div>
                    <div className="sns_link_list">
                        <div className="sub">
                            <p>INSTAGRAM</p>
                            <p>바로가기></p>
                        </div>
                        <div className="sub">
                            <p>youtube</p>
                            <p>바로가기></p>
                        </div>
                        <div className="sub">
                            <p>brunch</p>
                            <p>바로가기></p>
                        </div>
                    </div>
                </div>
                <EventList />
                <style jsx>
                    {`
                        p {
                            margin: 0px;
                            padding: 0px;
                            font-size: 12px;
                        }
                        span {
                            font-size: 13px;
                            font-weight: bold;
                        }

                        img {
                            width: 100%;
                        }
                        .title {
                            font-weight: bold;
                            font-size: 22px;
                            padding-bottom: 15px;
                        }
                        .link { padding-top: 10px; }
                        .img_wrap { padding: 25px 0px; }

                        .intro_wrap { padding: 50px 0px; text-align: center;}
                        .section { padding-top: 50px; }
                        .company_wrap .text_wrap {
                            padding: 00px 20px;
                        }

                        .detail_wrap  {
                            padding-bottom: 50px;
                            background: #f5f5f5;
                        }
                        .detail_01 .text_wrap { padding-left: 10%; }
                        .detail_01 .img_wrap { text-align: right; }
                        .detail_01 img { width: 90%; }
                        .detail_02 .text_wrap { padding-right: 10%; text-align: right; }
                        .detail_02 .img_wrap { text-align: left; }
                        .detail_02 img { width: 90%; }
                        
                        .detail_01 .link span {
                            font-size: 12px;
                            padding-right: 20px;
                        }

                        .detail_02 .link span {
                            font-size: 12px;
                            padding-left: 20px;
                        }

                        .detail_box {
                            background: #f5f5f5;
                            padding-bottom: 70px;
                        }
                        .detail_box .box {
                            opacity: 1;
                            margin: 0 30px;
                            background: #fff;
                            box-shadow: 0px 10px 30px 2px rgba(0,0,0,0.2);
                            border-radius: 30px;
                            text-align: center;
                        }
                        .detail_box img {
                            width: 86%;
                            margin: 60px auto;
                            border: 1px solid #d8d8d8;
                        }


                        .sns_wrap {
                            padding: 50px 20px;
                        }
                        .sns_link_list {
                            padding: 20px 0px;
                            display: flex;
                        }
                        .sns_link_list .sub {
                            width: 33%;
                        }



                        .container {
                            margin: 0 auto;
                            padding: 0px;
                        }
                        
                        h4 {
                            font-size: 17px;
                            font-weight: bold;
                            line-height: 60px;
                            position: relative;
                            text-align: center;
                            margin: 0px;
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

export default CompanyMain;