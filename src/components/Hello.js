import React from 'react';
import { selectors as firstNameSelectors } from '../state/firstName';
import { selectors as lastNameSelectors } from '../state/lastName';
import {useSelector} from 'react-redux';

export function Hello() {
    const firstName = useSelector(firstNameSelectors.getFirstName);
    const lastName = useSelector(lastNameSelectors.getlastName);

    return (
        <h1>Hello {firstName} {lastName}!</h1>
    );
}
