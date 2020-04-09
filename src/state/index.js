const DEFAULT_STATE = {
    firstName: 'Jordan',
    lastName: 'Foreman'
};

export function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'Update First Name':
            return {
                ...state, 
                firstName: action.firstName
            };
        case 'Update Last Name':
            return {
                ...state,
                lastName: action.lastName
            };
        default:
            return state;
    }
}
