import { useRouter } from 'next/router';
import Layout from '../../../components/layout/Layout';
import MyTeam from '../../../components/user/MyTeam';

export default function myteam() {
    const router = useRouter()
    
    return (
        <Layout>
            <MyTeam teamID={router.query.id}/>
        </Layout>
    )
}