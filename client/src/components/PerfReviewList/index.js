import { Link } from 'react-router-dom';
import { withAuth } from '../Session';
import * as ROUTES from '../../constants/routes';

const PerfReviewListBase = (props) => (
    <ul>
        {
            props.review_list.map(
                ({ id, target, reviewer }, idx) => (
                    <li key={idx}>
                        <Link to={ROUTES.PERF_FEEDBACK + `/${id}/${reviewer}/${target}`}>
                            [{target}] from {reviewer}
                        </Link>
                    </li>
                )
            )
        }
    </ul>
)

const ReviewerPendingPerfReviewListBase = (props) => {
    const { reviewer } = props;
    const item_list = props.auth.doGetPerfReviewListByReviewer(reviewer).result || [];
    return <PerfReviewListBase review_list={item_list} />
};

const ReviewerPendingPerfReviewList = withAuth(ReviewerPendingPerfReviewListBase);

const TargetPerfReviewListBase = (props) => {
    const { target } = props;
    const item_list = props.auth.doGetPerfReviewList(target).result || [];
    return <PerfReviewListBase review_list={item_list} />;
}
const TargetPerfReviewList = withAuth(TargetPerfReviewListBase);
//const PerfReviewList = withAuth(PerfReviewListBase);

const PerfReviewListPage = ({ authUser }) => {
    return (
        <div>
            <Link to={ROUTES.NEW_PERF_REVIEW}>Create</Link>
            <h2>Performance review list for Alice</h2>
            <TargetPerfReviewList target="Alice" />
            <h2>Pending performance review list for Bob</h2>
            <ReviewerPendingPerfReviewList reviewer="Bob" />
        </div>
    );
}


export default PerfReviewListPage;