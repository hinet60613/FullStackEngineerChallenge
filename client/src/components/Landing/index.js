import { withAuth } from "../Session";
import * as ROUTES from '../../constants/routes';
import { Link } from "react-router-dom";
import { Component } from "react";

const LandingWithAuth = (props) => (
    <h1>Hi {props.user.display_name}</h1>
)

const LandingWithoutAuth = () => (
    <h1>Greetings. Please <Link to={ROUTES.SIGN_IN}>sign in.</Link></h1>
)

class LandingBase extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log({ props: this.props });
        const user = this.props.auth?.state?.auth;
        return (<div>
            {user ? <LandingWithAuth user={user} /> : <LandingWithoutAuth />}
        </div>);
    }
};

const Landing = withAuth(LandingBase);

export default Landing;