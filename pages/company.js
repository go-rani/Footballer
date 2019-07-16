import Layout from '../components/layout/Layout';
import { Button, ButtonToolbar, OverlayTrigger, Popover } from 'react-bootstrap';

const company = () => (
    <Layout>
        <div className="pt-2 pb-2">
            <img src="/static/footballer_company.png" alt="main" style={{width:"100%", paddingBottom:"15px"}}/>
            <h4 style={{lineHeight:"inherit"}}>“Connect Everything” <br />새로운 연결, 더 나은 세상</h4>
        </div>
        <div className="pt-3 pb-3">
            <p className="font-weight-bold">팀 관리</p>
            <span>풋볼러를 통해 팀을 등록하고, 관리 할 수 있습니다. </span>
            <span>등록된 팀페이지에 신규 회원을 모집 할 수 있습니다.</span>
            <Button variant="outline-secondary" className="rounded-0 pl-2" size="sm">내 팀 등록하기</Button>
        </div>
        <div className="pt-3 pb-3">
            <p className="font-weight-bold">팀 매칭</p>
            <span>풋볼러를 통해 더 즐거운 세상을 꿈꿉니다. </span>
            <span>아마추어 팀을 연결함으로써 더 나은 환경을 만들기 위해 노력하고 있습니다.</span>
            <Button variant="outline-secondary" className="rounded-0 pl-2" size="sm">팀 매칭하기</Button>
        </div>
        <div className="pt-3 pb-3">
            <p className="font-weight-bold">제휴안내</p>
            <span>풋볼러와 함께 진행하시고 싶은 제안이 있다면 언제든 자유롭게 문의하세요.</span>
            <ButtonToolbar>
                <OverlayTrigger
                    trigger="click"
                    key="right"
                    placement="right"
                    overlay={
                        <Popover
                        id="popover-positioned-right"
                        title="준비중 입니다."
                        >
                        <strong>shsiss007@gmail.com</strong> 자세한 문의는 이메일로.
                        </Popover>
                    }
                    >
                    <Button variant="outline-secondary" className="rounded-0 pl-2" size="sm">제안하기 ▶</Button>
                </OverlayTrigger>
            </ButtonToolbar>
        </div>
    </Layout>
)

export default company;