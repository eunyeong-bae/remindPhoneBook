let initialState = {
    contactList:[],
    searchUser: '',
    count : 0,
}

function reducer(state=initialState, action) {
    const {type, payload} = action;

    switch(type){
        case "CREATE_USER":
            return {...state, 
                    contactList: [...state.contactList,
                                    {name: payload.name, 
                                        phone:payload.phone}
                                ],
                    count : state.count + 1,
                    searchUser: ''
            }
        case 'SEARCH_USER':
            return {
                ...state,
                searchUser: payload.searchUser,
                count: 0
            }
        default:
            return {...state}
    }
}

export default reducer;