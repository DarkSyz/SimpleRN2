'use strict';

const store = {
    username: '',
    setUsername(username){
        this.username = username;
    },
    getUsername() {
        return this.username;
    }
}

module.exports = store;