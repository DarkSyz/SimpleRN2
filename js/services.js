export default Service = {
    checkRFIDReader: ()=>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ( Math.random() >  0.495 )
                    resolve({ code: 0, message: 'Ready' });
                else
                    reject({ code: -1, message: 'Not Found' });
            },5000);
        })
    },

    fetchInstrument: (instrumentId) => {
        let data = {
            instrumentId: 'E0000001',
            RFIDTag: '000000000000000000000400',
            OSTag: '99960564',
            site: 'DEMO1',
            department: 'OS',
            building: 'B2',
            floor: '',
            room: '501'
        };
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
    },

    fetchSites: () => {
        let data = [
            { id: '1', name: 'BOSTON' },
            { id: '2', name: 'DEMO1' },
            { id: '3', name: 'DEMO2' },
        ];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
        })
    },

    fetchDepartments: () => {
        let data = [
            { id: '1', name: 'OneSource' },
            { id: '2', name: 'R&D' },
            { id: '3', name: 'Customer Care' },
        ];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
        })
    },

    fetchBuildings: () => {
        let data = ['B1', 'B2', 'B3', 'B4'];
        data = data.map((e) => ({
            id: e, name: e
        }));
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
        })
    },

    fetchFloors: () => {
        let data = ['F1', 'F2', 'F3', 'F4', 'F5'];
        data = data.map((e) => ({
            id: e, name: e
        }));
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
        })
    },

    fetchRooms: () => {
        let data = ['101', '201', '501', '502'];
        data = data.map((e) => ({
            id: e, name: e
        }));
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
        })
    },
}
