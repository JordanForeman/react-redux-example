import React from 'react';
import { FirstNameInput } from './components/FirstNameInput';
import { LastNameInput } from './components/LastNameInput';
import { Hello } from './components/Hello';

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
