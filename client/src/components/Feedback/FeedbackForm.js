import { createStyles, Paper } from "@material-ui/core";
const classes = createStyles({
    container: {
        position: "absolute",
        margin: 10,
    }
})

const FeedbackForm = (props) => {
    const { feedbackId, handleFormExit } = props;
    const handleSubmit = () => {
        handleFormExit();
    }
    return (
        <div onSubmit={handleSubmit}>
            <h5>[#{feedbackId}] Feedback for EMPLOYEE_NAME</h5>
            <form>
                <div>
                    <label>Reviewer</label>
                    <input disabled={true} type="text" name="reviewer" placeholder="reviewer" />
                </div>
                <div>
                    <label>Rating</label>
                    <input name="rating" type="number" max={5} step={0.1} min={1} />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea name="comment" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FeedbackForm;