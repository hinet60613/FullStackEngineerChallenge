import { useState } from 'react';
import { PerfReviewFeedbackForm } from '../PerfReview';
import PendingFeedbackList from './PendingFeedbackList';

const PendingFeedbackPage = () => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    return (
        <div>
            <h2>Pending Feedback</h2>
            <PendingFeedbackList />
            <PerfReviewFeedbackForm />
        </div>
    );
}

export default PendingFeedbackPage;