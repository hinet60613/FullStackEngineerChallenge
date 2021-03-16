import PerfReview, { NewPerfReviewForm, NewPerfReviewFormBase, PerfReviewFeedbackForm, PerfReviewFeedbackFormBase } from "../PerfReview";
import PerfReviewList from "../PerfReviewList";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import Landing from "../Landing";
import PerfReviewListPage from "../PerfReviewList";
import SignInPage from "../SignIn";
import { withAuth } from "../Session";
import { Component } from "react";

import * as ROUTES from '../../constants/routes';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log("App did update.");
    }
    componentWillUnmount() {
        console.log("component did unmount");
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <hr />
                    <Route exact path={ROUTES.LANDING} component={Landing} />
                    <Route path={ROUTES.SIGN_IN} component={SignInPage} />

                    <Switch>
                        <Route path='/review/new' component={NewPerfReviewForm} />
                        <Route path='/review/:id' component={PerfReview} />
                        <Route path='/review' component={PerfReviewListPage} />

                        <Route path={ROUTES.FEEDBACK + '/:id'} component={PerfReviewFeedbackForm} />
                        <Route path={ROUTES.FEEDBACK} component={() => (<div><h2>Pending Feedback</h2></div>)} />

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default withAuth(App);