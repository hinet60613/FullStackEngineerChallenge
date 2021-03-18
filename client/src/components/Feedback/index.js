import { Paper, Slide/*, Switch*/ } from '@material-ui/core';
import { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import PendingFeedbackList from './PendingFeedbackList';

const PendingFeedbackPage = () => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [formFeedbackId, setFormFeedbackId] = useState(null);
    /*
    const handleChange = () => {
        setShowFeedbackForm((prev) => !prev);
    }
    */

    const handleItemOnClick = (i) => {
        setFormFeedbackId(i);
        setShowFeedbackForm(true);
    }

    const handleFormExit = () => {
        setFormFeedbackId(null);
        setShowFeedbackForm(false);
    }
    //const switchFeedbackForm = (<Switch checked={showFeedbackForm} onChange={handleChange} />);
    return (
        <div>
            <h2>Pending Feedback</h2>
            <div>
                <Paper elevation={0}>
                    <PendingFeedbackList handleItemOnClick={handleItemOnClick} />
                </Paper>
                <Slide direction="up" in={showFeedbackForm}>
                    <Paper elevation={4}>
                        <FeedbackForm feedbackId={formFeedbackId} handleFormExit={handleFormExit} />
                    </Paper>
                </Slide>
            </div>
        </div>
    );
}

export default PendingFeedbackPage;