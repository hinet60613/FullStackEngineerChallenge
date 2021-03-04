const SignInPage = () => (
    <div>
        <SignInFormBase />
    </div>
);

const SignInFormBase = () => {
    return (
        <div>
            <button onClick={signInNonAdmin}>Sign in</button>
            <button onClick={signInAdmin}>Sign in as Admin</button>
        </div>
    )
}

export default SignInPage;