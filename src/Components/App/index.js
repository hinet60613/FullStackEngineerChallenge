import PerfReview, { NewPerfReviewFormBase, PerfReviewFeedbackFormBase } from "../PerfReview";
import PerfReviewList from "../PerfReviewList";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Navigator from "../Navigation";
import Landing from "../Landing";

const App = () => (
    <Router>
        <div>
            <Navigator />
            <hr />
            <Route path={ROUTES.LANDING} component={Landing} />
            <Switch>
                <Route path={ROUTES.NEW_PERF_REVIEW} component={NewPerfReviewFormBase} />
                <Route path={ROUTES.PERF_REVIEW} component={PerfReview} />
                <Route
                    path={ROUTES.PERF_FEEDBACK + "/:id/:reviewer/:target"}
                    component={PerfReviewFeedbackFormBase}
                />
                <Route path={ROUTES.PERF_REVIEW_LIST} component={PerfReviewList} />
                <Route path={ROUTES.PENDING_FEEDBACK} component={PerfReviewList} />
            </Switch>
        </div>
    </Router>
);

export default App;