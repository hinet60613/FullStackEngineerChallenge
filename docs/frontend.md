# Frontend
## Structure
The website structured as follows:

```
/.
  /review
    /:review_id
    /new
  /feedback
    /:feedback_id
```
### Review
Review page contains a list of performance reviews. By clicking list item, one will see the page for specific review by its `review_id`.

`new` page is an admin-only page for creating new review.

### Feedback
Feedback page contains a list of feedbacks pending for reviewers to fill. One can select list item to see the page for specific `feedback_id` page to fill in the feedback.


## Framework
React is used as front-end framework in the implementation.

Most of the components are written as functional component with hooks like `useState`, `useEffect`.

`React.useContext` is used for state control like authentication and back-end access. `Redux` is **not** used in this implementation to avoid extra 3rd package dependency.