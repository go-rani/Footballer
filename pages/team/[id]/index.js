import React from 'react';
import { useRouter } from 'next/router';
import db from '../../../common/db';
import Layout from '../../../components/layout/Layout';
import TeamDetail from '../../../components/team/TeamDetail';


export default function team() {
    const router = useRouter()
    
    return (
        <Layout>
            <TeamDetail teamID={router.query.id}/>
        </Layout>
    )
}

// import { useRouter } from 'next/router'
// import Link from 'next/link'

// const Post = () => {
//   const router = useRouter()
//   const { id } = router.query

//   return (
//     <>
//       <h1>Post: {id}</h1>
//       <ul>
//         <li>
//           <Link href='/team/[id]/[comment]' as={`/team/${id}/first-comment`}>
//             <a>First comment</a>
//           </Link>
//         </li>
//         <li>
//           <Link href='/team/[id]/[comment]' as={`/team/${id}/second-comment`}>
//             <a>Second comment</a>
//           </Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// export default Post
