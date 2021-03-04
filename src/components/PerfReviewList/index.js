import { Link } from 'react-router-dom';
import { withAuth } from '../Session';
import * as ROUTES from '../../constants/routes';

const PerfReviewListBase = () => {
    const item_list = [
        {
            id: 1,
            target: "Alice",
            reviewer: "Bob",
        },
        {
            id: 2,
            target: "Alice",
            reviewer: "Cathy",
        },
        {
            id: 3,
            target: "Alice",
            reviewer: "David",
        },
    ];

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