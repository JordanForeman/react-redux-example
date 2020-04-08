import { connect } from 'react-redux';
import { selectors as firstNameSelectors } from '../state/firstName';
import { selectors as lastNameSelectors } from '../state/lastName';
import { Hello as HelloComponent } from '../components/Hello';

function mapStateToProps(state) {
    const firstName = firstNameSelectors.getFirstName(state);
    const lastName = lastNameSelectors.getlastName(state);

    return {
        user: `${firstName} ${lastName}`
    }
}

export const Hello = connect(mapStateToProps)(HelloComponent);
