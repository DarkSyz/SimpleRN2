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
        {id: '1', site: 'Shanghai', building: 'B1', room: '501', system: 'MRK00001', OSTag: 'MRK00001', vendor: 'PerkinElmer', model: 'ICM-MS'},
        {id: '2', site: 'Shanghai', building: 'B1', room: '501', system: 'MRK00001', OSTag: 'MRK00002', vendor: 'PerkinElmer', model: 'A1'},
        {id: '3', site: 'Shanghai', building: 'B1', room: '501', system: 'MRK0000a', OSTag: 'MRK000A1', vendor: 'PerkinElmer', model: 'ICM-MS'},
        {id: '4', site: 'Shanghai', building: 'B1', room: '501', system: 'MRK0000a', OSTag: 'MRK000A2', vendor: 'PerkinElmer', model: 'A1'},
        {id: '5', site: 'Shanghai', building: 'B1', room: '501', system: '', OSTag: 'MRK00011', vendor: 'PerkinElmer', model: 'IR-1'},
        {id: '6', site: 'Shanghai', building: 'B1', room: '501', system: '', OSTag: 'MRK00031', vendor: 'PerkinElmer', model: 'IR-1'},
        {id: '7', site: 'Shanghai', building: 'B1', room: '501', system: '', OSTag: 'MRK00041', vendor: 'PerkinElmer', model: 'IR-1'},
        {id: '8', site: 'Shanghai', building: 'B2', room: '102', system: 'MRK0002!', OSTag: 'MRK00020', vendor: 'PerkinElmer', model: 'AA'},
        {id: '9', site: 'Shanghai', building: 'B2', room: '102', system: 'MRK0002!', OSTag: 'MRK00021', vendor: 'PerkinElmer', model: 'AA'},
        
        {id: '10', site: 'Taicang', building: 'B1', room: '501', system: 'MRK0002!', OSTag: 'MRK00011', vendor: 'PerkinElmer', model: 'IR-1'},

        {id: '11', site: 'Taicang', building: 'B1', room: '501', system: 'MRK00001', OSTag: 'MRK00001', vendor: 'PerkinElmer', model: 'ICM-MS'},
        {id: '12', site: 'Taicang', building: 'B1', room: '501', system: 'MRK00001', OSTag: 'MRK00002', vendor: 'PerkinElmer', model: 'A1'},
        {id: '13', site: 'Taicang', building: 'B1', room: '501', system: 'MRK0000a', OSTag: 'MRK000A1', vendor: 'PerkinElmer', model: 'ICM-MS'},
        {id: '14', site: 'Taicang', building: 'B1', room: '501', system: 'MRK0000a', OSTag: 'MRK000A2', vendor: 'PerkinElmer', model: 'A1'},
        {id: '15', site: 'Taicang', building: 'B1', room: '501', system: '', OSTag: 'MRK00011', vendor: 'PerkinElmer', model: 'IR-1'},
        {id: '16', site: 'Taicang', building: 'B1', room: '501', system: '', OSTag: 'MRK00031', vendor: 'PerkinElmer', model: 'IR-1'},
        {id: '17', site: 'Taicang', building: 'B1', room: '501', system: '', OSTag: 'MRK00041', vendor: 'PerkinElmer', model: 'IR-1'},
        {id: '18', site: 'Taicang', building: 'B2', room: '102', system: 'MRK00020', OSTag: 'MRK00020', vendor: 'PerkinElmer', model: 'AA'},
        {id: '19', site: 'Taicang', building: 'B2', room: '102', system: 'MRK00020', OSTag: 'MRK00021', vendor: 'PerkinElmer', model: 'AA'},
    ],
    getFavorites(){
        return this.favorites;
    }
}

module.exports = store;