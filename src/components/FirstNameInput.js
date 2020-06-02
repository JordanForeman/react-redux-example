import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from '../state/firstName';
import { Input } from './Input';

export function FirstNameInput () {
    const value = useSelector(selectors.getFirstName);
    const dispatch = useDispatch();

    return (
        <Input
            value={value}
            onChange={(e) => dispatch(actions.update(e.target.value))}
        />
    );
}
