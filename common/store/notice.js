import { observable } from 'mobx';

class noticeStore {
    @observable key = ""
    @observable title = ""
    @observable contents = ""
}

export default (new noticeStore);