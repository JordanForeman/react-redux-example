export function updateFirstName(firstName) {
    return {
        type: 'Update First Name',
        firstName
    };
}

export function updateLastName(lastName) {
    return {
        type: 'Update Last Name',
        lastName
    };
}
