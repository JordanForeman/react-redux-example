const UPDATE_FIRST_NAME = 'Update First Name';
const DEFAULT_FIRST_NAME = 'Jordan';

export const actions = {
    update: (firstName) => ({
        type: UPDATE_FIRST_NAME,
        firstName
    })
};

export default function (state = DEFAULT_FIRST_NAME, action) {
    if (action.type === UPDATE_FIRST_NAME) {
        return action.firstName;
    }

    return state;
}

export const selectors = {
    getFirstName: state => state.firstName
};
