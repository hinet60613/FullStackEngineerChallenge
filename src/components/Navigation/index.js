import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withAuth } from '../Session';

const NavigationBase = (props) => (
    <div>
        {
            props.backend?.auth ?
                <NavigationAuth auth={props.backend.auth} />
                : <NavigationNonAuth />
        }
    </div>
);

const Navigation = withAuth(NavigationBase);

const NavigationAuth = () => (
    <div>
        <h1>Navigation(Auth)</h1>
    </div>
);

const NavigationNonAuth = () => (
    <div>
        <h1>Navigation</h1>
        <nav>
            <ul>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.PERF_REVIEW}>Performance Review</Link>
                </li>
                <li>
                    <Link to={ROUTES.PERF_REVIEW_LIST}>Performacne Review List</Link>
                </li>
                <li>
                    <Link to={ROUTES.PENDING_FEEDBACK}>Pending Feedback</Link>
                </li>
            </ul>
        </nav>
    </div>
)

export default Navigation;