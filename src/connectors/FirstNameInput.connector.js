import { connect } from 'react-redux';
import { actions, selectors } from '../state/firstName';
import { Input } from '../components/Input';

function mapStateToProps(state) {
    return {
        value: selectors.getFirstName(state)
    }
}

const mapDispatchToProps = {
    onChange: (event) => actions.update(event.target.value)
};

export const FirstNameInput = connect(mapStateToProps, mapDispatchToProps)(Input);
