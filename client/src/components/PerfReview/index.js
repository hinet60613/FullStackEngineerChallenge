import { useState } from "react";
import { withAuth } from "../Session";

const NewPerfReviewFormBase = (props) => {
    const INITIAL_STATE = {
        target: "",
        reviewers: []
    };

    const [state, setState] = useState({ ...INITIAL_STATE });
    const onSubmit = (event) => {
        console.log({ state });
        event.preventDefault();
    }
    const onChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Target Employee</label>
                <input
                    type="text"
                    name="target"
                    onChange={onChange}
                    placeholder="Target employee"
                />
            </div>
            <div>
                <label>Assignee</label>
                <input
                    type="text"
                    name="reviewers"
                    onChange={onChange}
                    placeholder="Assign reviewers"
                />

            </div>
            <button type="submit">Create</button>
        </form>
    )
}

const NewPerfReviewForm = withAuth(NewPerfReviewFormBase);

const PerfReviewFeedbackFormBase = (props) => {
    const _test_data = {
        id: 3,
        target: "Alice",
        reviewer: "Bob",
        rating: 0,
        comment: "",
    };
    const { id, target, reviewer } = props.match?.params || _test_data;
    const INITIAL_STATE = {
        id: id,
        target: target,
        reviewer: reviewer,
        rating: 0,
        comment: "",
    }
    const [state, setState] = useState({ ...INITIAL_STATE });

    const onSubmit = (event) => {
        console.log(state);
        event.preventDefault();
    }

    const onChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }
    const isInvalid = () => {
        return state.rating === 0 || state.comment === "";
    }

    return (
        <div>
            <h2>[#{id}] Feedback for {target}</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Reviewer</label>
                    <input
                        disabled={true}
                        onChange={onChange}
                        name="reviewer"
                        type="text"
                        value={reviewer}
                    />
                </div>
                <div>
                    <label>Rating</label>
                    <input
                        onChange={onChange}
                        name="rating"
                        type="number"
                        max={5}
                        step={0.1}
                        min={1}
                    />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea
                        onChange={onChange}
                        name="comment"
                    />
                </div>
                <button type="submit" disabled={isInvalid()}>Submit</button>
            </form>
        </div>
    );
}

const PerfReviewFeedbackForm = withAuth(PerfReviewFeedbackFormBase);

const PerfReviewFeedback = (props) => {
    const { reviewer, rating, comment } = props;
    return (
        <div>
            <div><strong>{rating.toFixed(1)}</strong> by {reviewer}</div>
            <p className="feedback_comment">{comment}</p>
        </div>
    )
}

const FeedbackList = ({ feedbacks }) => {
    // since we are only appending new data to the end of array, it's safe to use index as key.
    return (
        <div>
            {
                feedbacks.map(
                    ({ reviewer, rating, comment }, index) => (
                        <PerfReviewFeedback
                            key={index}
                            reviewer={reviewer}
                            rating={rating}
                            comment={comment}
                        />
                    )
                )
            }
        </div>
    );
}

const PerfReview = () => {
    const feedbacks = [
        {
            reviewer: "Alice",
            rating: 4.9,
            comment: "Always a pleasure to work with you!"
        },
        {
            reviewer: "Bob",
            rating: 3.0,
            comment: "Could reply email more often."
        },
    ];
    const overallRating = feedbacks.reduce(
        (accu, feedback) =>
            (accu + (feedback.rating / feedbacks.length))
        , 0);

    return (
        <div>
            <h2>Performance Review</h2>
            <h3>Overall Rating: {overallRating}</h3>
            <FeedbackList feedbacks={feedbacks} />
        </div>
    )
}
export default PerfReview;
export {
    PerfReviewFeedback,
    PerfReviewFeedbackForm,
    NewPerfReviewForm,
};