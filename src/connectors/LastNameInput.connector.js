import { connect } from 'react-redux';
import { actions, selectors } from '../state/lastName';
import { Input } from '../components/Input';

function mapStateToProps(state) {
    return {
        value: selectors.getlastName(state)
    }
}

const mapDispatchToProps = {
    onChange: (event) => actions.update(event.target.value)
};

export const LastNameInput = connect(mapStateToProps, mapDispatchToProps)(Input);
