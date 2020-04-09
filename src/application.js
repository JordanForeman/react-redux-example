import React from 'react';
import { FirstNameInput } from './connectors/FirstNameInput.connector';
import { LastNameInput } from './connectors/LastNameInput.connector';
import { Hello } from './connectors/Hello.connector';

export class Application extends React.Component {
    render() {
        return (
            <div>
                <FirstNameInput />
                <LastNameInput />
                <Hello/>
            </div>
        );
    }
}
