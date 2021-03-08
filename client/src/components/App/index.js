import PerfReview, { NewPerfReviewFormBase, PerfReviewFeedbackFormBase } from "../PerfReview";
import PerfReviewList from "../PerfReviewList";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Navigator from "../Navigation";
import Landing from "../Landing";
import PerfReviewListPage from "../PerfReviewList";
import { withAuth } from "../Session";
import SignInPage from "../SignIn";
import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        }
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
                    <Navigator />
                    <hr />
                    <Route exact path={ROUTES.LANDING} component={Landing} />
                    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Switch>
                        <Route path={ROUTES.NEW_PERF_REVIEW} component={NewPerfReviewFormBase} />
                        <Route path={ROUTES.PERF_REVIEW} component={PerfReview} />
                        <Route
                            path={ROUTES.PERF_FEEDBACK + "/:id/:reviewer/:target"}
                            component={PerfReviewFeedbackFormBase}
                        />
                        <Route path={ROUTES.PERF_REVIEW_LIST} component={PerfReviewListPage} />
                        <Route path={ROUTES.PENDING_FEEDBACK} component={PerfReviewList} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default withAuth(App);