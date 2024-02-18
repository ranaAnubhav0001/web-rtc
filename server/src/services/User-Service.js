import {User} from '../models/user-model.js'

const UserService = {
    //FIND-USER
    async findUser(filter) {
        const user = await User.findOne(filter);
        return user;
    },

    //CREATE-USER
    async createUser(data) {
        const user = await User.create(data);
        return user;
    }
}

export default UserService;