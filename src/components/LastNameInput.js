import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from '../state/lastName';
import { Input } from './Input';

export function LastNameInput () {
    const value = useSelector(selectors.getlastName);
    const dispatch = useDispatch();

    return (
        <Input
            value={value}
            onChange={(e) => dispatch(actions.update(e.target.value))}
        />
    );
}
