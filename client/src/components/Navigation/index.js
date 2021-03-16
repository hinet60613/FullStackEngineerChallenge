import { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withAuth } from '../Session';

const NavigationWithAuth = (props) => (
    <div>
        <h1>Hi {props.user.display_name}</h1>
        <nav>
            <ul>
                <li>
                    <Link to={ROUTES.LANDING}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.REVIEW}>Performance Review</Link>
                </li>
                <li>
                    <Link to={ROUTES.FEEDBACK}>Pending Feedback</Link>
                </li>
            </ul>
        </nav>
    </div>
);

const NavigationWithoutAuth = () => (
    <div>
        <h1>Please <Link to={ROUTES.SIGN_IN}>sign in.</Link></h1>
        <nav>
            <ul>
                <li>
                    <Link to={ROUTES.LANDING}>Home</Link>
                </li>
            </ul>
        </nav>
    </div>
)

const NavigationBase = (props) => {
    console.log('render <NavigationBase />');
    return (
        <div>
            {
                (props.auth?.state?.auth) ?
                    <NavigationWithAuth user={props.auth.state.auth} />
                    : <NavigationWithoutAuth />
            }
        </div>
    );
}


const Navigation = withAuth(NavigationBase);

export default Navigation;