'use strict';

const store = {
    username: '',
    setUsername(username){
        this.username = username;
    },
    getUsername() {
        return this.username;
    },
    favorites: [
        {id: '1', vendorName: 'PerkinElmer', modelName: 'ICM-MS'},
        {id: '2', vendorName: 'PerkinElmer', modelName: 'IR-1'},
        {id: '3', vendorName: 'PerkinElmer', modelName: 'GX-1'},        
    ],
    getFavorites(){
        return this.favorites;
    }
}

module.exports = store;