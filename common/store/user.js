import { observable } from 'mobx';

class User {
    @observable info = {
        displayName : "",
        photoURL : "",
        email : "",
        uid : ""
    }
}

export default (new User);