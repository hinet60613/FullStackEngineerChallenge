import { Link } from 'react-router-dom';
import { withAuth } from '../Session';
import * as ROUTES from '../../constants/routes';
import { useEffect, useState } from 'react';

import { Card, CardContent, CardActions, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const PerfReviewListBase = (props) => {
    const classes = useStyles();
    return (
        <ul>
            {
                props.review_list.map(
                    ({ id, target, reviewer }, idx) => (
                        <Card key={idx}>
                            <CardContent>
                                <Typography color="textSecondary">
                                    #{id}
                                </Typography>
                                <Typography variant="h5">
                                    {target}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    reviewed by {reviewer}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={ROUTES.PERF_FEEDBACK + `/${id}/${reviewer}/${target}`}>More</Link>
                            </CardActions>
                        </Card>
                    )
                )
            }
        </ul>
    );
}

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
                setReviewList(Object.values(data).filter(review => review.target === target));
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
        </div>
    );
    /*
        <h2>Pending performance review list for Bob</h2>
        <ReviewerPendingPerfReviewList reviewer="Bob" />
    */
}


export default PerfReviewListPage;
export {
    TargetPerfReviewList,
    ReviewerPendingPerfReviewList
};