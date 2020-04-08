import React from 'react';
import { Hello } from './components/Hello';
import {Input} from './components/Input';

export class Application extends React.Component {
    constructor() {
        super();
        this.state = { name: 'World' };
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Input
                    onChange={::this.updateName}
                    value={this.state.name}
                />
                <Hello user={this.state.name} />
            </div>
        );
    }
}
