import { Link } from 'react-router-dom';
import { withAuth } from '../Session';
import * as ROUTES from '../../constants/routes';
import { useEffect, useState } from 'react';

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
    const [reviewList, setReviewList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/review/pending/${reviewer}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                setReviewList(data.result);
            })
            .catch(error => {
                console.log('error: ', error.message)
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [reviewer]);
    if (loading) return 'loading...';
    if (error) return `error: ${error.message}`;
    //const item_list = props.auth.doGetPerfReviewListByReviewer(reviewer).result || [];
    return <PerfReviewListBase review_list={reviewList} />
};

const ReviewerPendingPerfReviewList = withAuth(ReviewerPendingPerfReviewListBase);

const TargetPerfReviewListBase = (props) => {
    const { target } = props;
    const [reviewList, setReviewList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/review')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                setReviewList(data.reviews.filter(review => review.target === target));
            })
            .catch(error => {
                console.log('error while fetching', error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [target]);

    if (loading) return 'loading...';
    if (error) return `error: ${error.message}`;
    //const item_list = props.auth.doGetPerfReviewList(target).result || [];
    return <PerfReviewListBase review_list={reviewList} />
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