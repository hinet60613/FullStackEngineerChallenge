import { useState } from "react";
import { withAuth } from "../Session";
import { isEmail } from 'validator';
import * as ROUTES from '../../constants/routes'

const SignInPage = (props) => (
    <div>
        <SignInForm history={props.history} />
    </div>
);

const SignInFormBase = (props) => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const signInAdmin = () => {
        props.auth.doSignInAdmin();
        props.history.push(ROUTES.LANDING);
    }
    const handleSignIn = (event) => {
        console.log('handle sign in ', { account, password });
        props.auth.doSignIn(account);
        props.history.push(ROUTES.LANDING);
        event.preventDefault();
    }
    const isInvalid = !isEmail(account) || password === "";
    return (
        <div>
            <div>
                <form onSubmit={handleSignIn}>
                    <div>
                        <label for="account">Account</label>
                        <input type="email" name="account" onChange={(e) => { setAccount(e.target.value); }} />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" onChange={(e) => { setPassword(e.target.value); }} />
                    </div>
                    <button disabled={isInvalid} type="submit">Sign in</button>
                </form>
            </div>
            <div>
                <button onClick={signInAdmin}>Sign in as Admin</button>
            </div>
        </div>
    )
}

const SignInForm = withAuth(SignInFormBase);

export default SignInPage;