import { Link } from 'react-router-dom';
import { withAuth } from '../Session';
import * as ROUTES from '../../constants/routes';

const PerfReviewListBase = (props) => {
    const item_list = props.auth.doGetPerfReviewList("Alice").result;
    console.log({ item_list });
    return (
        <ul>
            {
                item_list.map(
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
    );
}

const PerfReviewList = withAuth(PerfReviewListBase);

const PerfReviewListPage = ({ authUser }) => {
    return (
        <div>
            <Link to={ROUTES.NEW_PERF_REVIEW}>Create</Link>
            <PerfReviewList />
        </div>
    );
}


export default PerfReviewListPage;