import { Card, CardContent, Typography } from "@material-ui/core";

const PendingFeedbackCard = (props) => {
    const { feedback, handleItemOnClick } = props;
    const { id, assignee } = feedback;
    return (
        <Card key={id} elevation={1} variant="outlined" onClick={() => handleItemOnClick(id)}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    [#{id}] assigned by {assignee}
                </Typography>
            </CardContent>
        </Card>
    );
}

const PendingFeedbackList = (props) => {
    const { handleItemOnClick } = props;
    const _test_data = {
        "result": [
            {
                "id": 3,
                "review_id": 2,
                "assignee": "Alice",
                "pending": true
            },
            {
                "id": 4,
                "review_id": 2,
                "assignee": "Alice",
                "pending": true
            }
        ]
    };

    const data = props.feedback_list || _test_data;
    return (
        <div>{
            Object.values(data.result).map(
                feedback => (
                    <PendingFeedbackCard
                        feedback={feedback}
                        handleItemOnClick={handleItemOnClick}
                    />
                )
            )
        }</div>
    );
}

export default PendingFeedbackList;