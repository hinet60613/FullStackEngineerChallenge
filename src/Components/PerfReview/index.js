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
export { PerfReviewFeedback };