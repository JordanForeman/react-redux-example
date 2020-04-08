const UPDATE_LAST_NAME = 'Update Last Name';
const DEFAULT_LAST_NAME = 'Foreman';

export const actions = {
    update: (lastName) => ({
        type: UPDATE_LAST_NAME,
        lastName
    })
};

export default function (state = DEFAULT_LAST_NAME, action) {
    if (action.type === UPDATE_LAST_NAME) {
        return action.lastName;
    }

    return state;
}

export const selectors = {
    getlastName: state => state.lastName
};