import { Link } from "react-router-dom";
import { withAuth } from "../Session";
import * as ROUTES from "../../constants/routes";

const SignOutPageBase = (props) => {
    //console.log({auth: props.auth.state.auth});
    props.auth.doSignOut();
    return (
        <div>
            You've been signed out. <Link to={ROUTES.SIGN_IN}>Sign in.</Link>
        </div>
    );
        
}

const SignOutPage = withAuth(SignOutPageBase);
export default SignOutPage;