import React from 'react';

export function Input(props) {
    return (
        <input
            type='text'
            onChange={props.onChange}
            value={props.value}
        />
    );
}
