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
    return (
        <div>
            <PerfReviewFeedback reviewer="Alice" rating={4.9} comment="Always a pleasure to work with you!" />
            <PerfReviewFeedback reviewer="Bob" rating={3.0} comment="Could reply email more often." />
        </div>
    )
}
export default PerfReview;
export { PerfReviewFeedback };