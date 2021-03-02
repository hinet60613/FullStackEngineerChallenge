import { useState } from "react";

const PerfReviewFeedbackFormBase = (props) => {
    // TODO: replace user_name to actual variable.
    const user_name = "Ethan";
    const INITIAL_STATE = {
        reviewer: user_name,
        rating: 5.0,
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

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Reviewer</label>
                <input
                    disabled={true}
                    onChange={onChange}
                    name="reviewer"
                    type="text"
                    value={user_name}
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
            <button type="submit">Submit</button>
        </form>
    );
}

const PerfReviewFeedback = (props) => {
    const { reviewer, rating, comment } = props;
    return (
        <div>
            <div><strong>{rating.toFixed(1)}</strong> by {reviewer}</div>
            <p className="feedback_comment">{comment}</p>
        </div>
    )
}

const PerfReview = (props) => {
    const reviews = [
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

    // since we are only appending new data to the end of array, it's safe to use index as key.
    return (
        <div>
            {
                reviews.map(
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
    )
}
export default PerfReview;
export { PerfReviewFeedback, PerfReviewFeedbackFormBase };