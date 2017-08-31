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
        {id: '4', vendorName: 'PerkinElmer', modelName: 'ICM-MS'},
        {id: '5', vendorName: 'PerkinElmer', modelName: 'IR-1'},
        {id: '6', vendorName: 'PerkinElmer', modelName: 'GX-1'},   
        {id: '7', vendorName: 'PerkinElmer', modelName: 'ICM-MS'},
        {id: '8', vendorName: 'PerkinElmer', modelName: 'IR-1'},
        {id: '9', vendorName: 'PerkinElmer', modelName: 'GX-1'},   
        {id: '10', vendorName: 'PerkinElmer', modelName: 'ICM-MS'},
        {id: '11', vendorName: 'PerkinElmer', modelName: 'IR-1'},
        {id: '12', vendorName: 'PerkinElmer', modelName: 'GX-1'},   
        {id: '13', vendorName: 'PerkinElmer', modelName: 'ICM-MS'},
        {id: '14', vendorName: 'PerkinElmer', modelName: 'IR-1'},
        {id: '15', vendorName: 'PerkinElmer', modelName: 'GX-1'},     
        {id: '16', vendorName: 'PerkinElmer', modelName: 'ICM-MS'},
        {id: '17', vendorName: 'PerkinElmer', modelName: 'IR-1'},
        {id: '18', vendorName: 'PerkinElmer', modelName: 'GX-1'},        
        {id: '19', vendorName: 'PerkinElmer', modelName: 'ICM-MS'},
        {id: '20', vendorName: 'PerkinElmer', modelName: 'IR-1'},                                   
    ],
    getFavorites(){
        return this.favorites;
    }
}

module.exports = store;