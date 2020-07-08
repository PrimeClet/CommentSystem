// initial state
const state = () => ({
    users: [{
        "id": 1,
        "Login": "Jedrzejczak",
        "Password": "btNEGwwyBE",
        "Avatar": "https://robohash.org/sequiveniamvoluptatem.png?size=50x50&set=set1"
    },
        {
            "id": 2,
            "Login": "Jammes",
            "Password": "Jj8TjpzNX",
            "Avatar": "https://robohash.org/sitquaesapiente.png?size=50x50&set=set1"
        },
        {
            "id": 3,
            "Login": "Payler",
            "Password": "aR7nAvkTOpWQ",
            "Avatar": "https://robohash.org/laborumconsecteturquis.png?size=50x50&set=set1"
        },
        {
            "id": 4,
            "Login": "Foister",
            "Password": "VCHDT9Bpz",
            "Avatar": "https://robohash.org/excepturiimpeditadipisci.jpg?size=50x50&set=set1"
        },
        {
            "id": 5,
            "Login": "Newdick",
            "Password": "XGX0wqgx7tyu",
            "Avatar": "https://robohash.org/voluptasetoccaecati.jpg?size=50x50&set=set1"
        },
        {
            "id": 6,
            "Login": "Eckart",
            "Password": "dJpckAEeZ2",
            "Avatar": "https://robohash.org/voluptatemdolorvoluptatem.png?size=50x50&set=set1"
        },
        {
            "id": 7,
            "Login": "Pellman",
            "Password": "q41ZPe",
            "Avatar": "https://robohash.org/autquivoluptas.bmp?size=50x50&set=set1"
        },
        {
            "id": 8,
            "Login": "Groucock",
            "Password": "hDhJMiC",
            "Avatar": "https://robohash.org/utsitincidunt.bmp?size=50x50&set=set1"
        },
        {
            "id": 9,
            "Login": "Andreasen",
            "Password": "QXYZbb2",
            "Avatar": "https://robohash.org/quasquisquamalias.png?size=50x50&set=set1"
        },
        {
            "id": 10,
            "Login": "Chasmer",
            "Password": "xp3SjIHB",
            "Avatar": "https://robohash.org/autvitaeea.bmp?size=50x50&set=set1"
        },
        {
            "id": 11,
            "Login": "Tuvey",
            "Password": "0DmgjBp608MV",
            "Avatar": "https://robohash.org/sequisapientedeleniti.bmp?size=50x50&set=set1"
        },
        {
            "id": 12,
            "Login": "Farnall",
            "Password": "tsExFmyxHUl",
            "Avatar": "https://robohash.org/absintaut.png?size=50x50&set=set1"
        },
        {
            "id": 13,
            "Login": "Regenhardt",
            "Password": "3yxSDb9gu",
            "Avatar": "https://robohash.org/utnihildeserunt.bmp?size=50x50&set=set1"
        },
        {
            "id": 14,
            "Login": "Cicchillo",
            "Password": "Te9q3CoYdKYS",
            "Avatar": "https://robohash.org/undedoloremqueaspernatur.bmp?size=50x50&set=set1"
        },
        {
            "id": 15,
            "Login": "Bibb",
            "Password": "yJEp7Jb7SG",
            "Avatar": "https://robohash.org/mollitiaquasidicta.jpg?size=50x50&set=set1"
        },
        {
            "id": 16,
            "Login": "Ovett",
            "Password": "EhziaVwmx2q",
            "Avatar": "https://robohash.org/dolorquaeratconsectetur.bmp?size=50x50&set=set1"
        },
        {
            "id": 17,
            "Login": "O'Caherny",
            "Password": "2m1bBypKfuG",
            "Avatar": "https://robohash.org/etremreiciendis.bmp?size=50x50&set=set1"
        },
        {
            "id": 18,
            "Login": "Schumacher",
            "Password": "1ymRjrT",
            "Avatar": "https://robohash.org/voluptatemomniscumque.jpg?size=50x50&set=set1"
        },
        {
            "id": 19,
            "Login": "Cutchie",
            "Password": "XU2RmQ3N4",
            "Avatar": "https://robohash.org/pariatursuscipitcorporis.png?size=50x50&set=set1"
        },
        {
            "id": 20,
            "Login": "holmes",
            "Password": "5Yx53SAyL",
            "Avatar": "https://robohash.org/abipsumquas.bmp?size=50x50&set=set1"
        }]
})

const getters = {
    IsInUsersData: (state) => {
        return (bar) => {
            return bar + state;
        }
        //  return state.users.map(({ Login, Password }) => {
        //      const user = rootState.users.all.find(users => (users.Login === Login && users.Password === Password))
        //      return {
        //          id: user.id,
        //          login: user.Login,
        //          Password: user.Password,
        //          avatar: user.Avatar
        //      }
        // });
    }
}


export default {
    namespaced: true,
    state: state,
    getters: getters,
    // actions,
    // mutations
}