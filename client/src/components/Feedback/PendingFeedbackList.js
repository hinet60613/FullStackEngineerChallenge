import { useState } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from '../../constants/routes';

const PendingFeedbackList = (props) => {
    const _test_data = {
        "result": [
            {
                "id": 3,
                "review_id": 2,
                "assignee": "Alice",
                "pending": true
            }
        ]
    };
    const [data, setData] = useState(props.feedback_list || _test_data);
    return (
        <ul>
            {
                Object.values(data.result).map(
                    feedback => {
                        const { id, assignee } = feedback;
                        return (
                            <li key={id}>
                                <Link to={ROUTES.FEEDBACK + `/${id}`}>
                                    [#{id}] assigned by {assignee}
                                </Link>
                            </li>
                        );
                    }
                )
            }
        </ul>
    );
}

export default PendingFeedbackList;