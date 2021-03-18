import PerfReview, { NewPerfReviewForm, PerfReviewFeedbackForm, } from "../PerfReview";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import Landing from "../Landing";
import PerfReviewListPage from "../PerfReviewList";
import SignInPage from "../SignIn";
import { withAuth } from "../Session";

import * as ROUTES from '../../constants/routes';
import PendingFeedbackPage from "../Feedback";
import SignOutPage from "../SignOut";

const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_OUT} component={SignOutPage} />

            <Switch>
                <Route path={ROUTES.REVIEW + '/new'} component={NewPerfReviewForm} />
                <Route path={ROUTES.REVIEW + '/:id'} component={PerfReview} />
                <Route path={ROUTES.REVIEW} component={PerfReviewListPage} />

                <Route path={ROUTES.FEEDBACK + '/:id'} component={PerfReviewFeedbackForm} />
                <Route path={ROUTES.FEEDBACK} component={PendingFeedbackPage} />

            </Switch>
        </div>
    </Router>
);

export default withAuth(App);