import React from 'react';
import { Hello } from './components/Hello';

export class Application extends React.Component {
    render() {
        return (
            <div>
                <Hello user={'World'}/>
            </div>
        );
    }
}
