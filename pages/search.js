import React from 'react';
import Layout from '../components/layout/Layout';

const Search = ({url}) => {
    return (
        <Layout>
            당신이 검색한 키워드는 "{url.query.keyword}" 입니다.tt
        </Layout>
    );
};

export default Search;

// class Search extends React.Component {
//     static async getInitialProps ({req}) {
//         console.log("aaa"+req)
//         return req 
//             ? { from: 'server' } // 서버에서 실행 할 시
//             : { from: 'client '} // 클라이언트에서 실행 할 시
//     }

//     render() {
//         return (
//             <Layout>
//                 {this.props.from} 에서 실행이 되었어요.
//             </Layout>
//         );
//     }
// }

// export default Search;