export const state = () => ({
    featuredCars: [
        // {
        //     id:0,
        //     img:'',
        //     imgAlt:'',
        //     name:'',
        //     count:''
        // }
        {
            id: 1,
            img: '/lomy/img/buses-xl.jpg',
            imgAlt: 'used trucks in perfect shape',
            name: 'Buses',
            count: '34'
        },
        {
            id: 2,
            img: '/lomy/img/trucks-xl.jpg',
            imgAlt: 'used trucks in perfect shape',
            name: 'Trucks',
            count: '10'
        },
        {
            id: 3,
            img: '/lomy/img/crane-xl.jpg',
            imgAlt: 'used cranes  ready for the job',
            name: 'Cranes',
            count: '3'
        },
        {
            id: 4,
            img: '/lomy/img/car-xl.jpg',
            imgAlt: 'used cars ready for the job',
            name: 'Cars',
            count: '35'
        },
        {
            id: 5,
            img: '/lomy/img/crane-car-xl.jpg',
            imgAlt: 'used heavy cars ready for the job',
            name: 'Equipment',
            count: '120'
        },
    ],

    newlyArrives: [
        {
            id: 11,
            img: '/lomy/img/crane-car-xl.jpg',
            imgAlt: 'used trucks in perfect shape',
            name: 'KATO T 39',
            count: '34'
        },
        {
            id: 21,
            img: '/lomy/img/buses-xl.jpg',
            imgAlt: 'used trucks in perfect shape',
            name: 'X10 ONE',
            count: '10'
        },
        {
            id: 31,
            img: '/lomy/img/crane-xl.jpg',
            imgAlt: 'used cranes  ready for the job',
            name: 'FKJ 37H',
            count: '3'
        },
    ],
    expectedArrives: [
        
        {
            id: 40,
            img: '/lomy/img/car-xl.jpg',
            imgAlt: 'used cars ready for the job',
            name: 'Hunday X21',
            count: '35'
        },
        
        {
            id: 20,
            img: '/lomy/img/trucks-xl.jpg',
            imgAlt: 'used trucks in perfect shape',
            name: 'International 700HQ',
            count: '10'
        },
    ]
})

export const getters = {
    featuredCars: state => {
        return state.featuredCars
    },
    newlyArrives: state => {
        return state.newlyArrives
    },
    expectedArrives: state => {
        return state.expectedArrives
    },

}

export const mutations = {
    updateValue: (state, payload) => {
        state.value = payload
    }
}

export const actions = {
    updateActionValue({ commit }) {
        commit('updateValue', payload)
    }
}