import Document, { Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {

    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="naver-site-verification" content=""/>
                    <meta name="description" content="설명"></meta>
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="타이틀" />
                    <meta property="og:description" content="설명" />
                    <meta property="og:image" content="" />
                    <meta property="og:url" content="" />
                    <title>타이틀</title>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                        crossorigin="anonymous"
                    />
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <link rel="stylesheet" key="google-font-cabin" href="https://fonts.googleapis.com/css?family=Montserrat|Nanum+Gothic&display=swap" />
                    {/* <link rel="icon" type="image/x-icon" href="/static/taeyangemc.ico" /> */}
                </Head>
                <body style={{backgroundColor:"#f9f9f9", maxWidth:"768px", margin: "0 auto", padding: "0", backgroundSize: "768px", color:"#333", fontFamily: "-apple-system, 'Montserrat', 'Nanum Gothic', sans-serif"}}>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }

}

export default CustomDocument;