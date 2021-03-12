# Design

## Data Structure
### Review

Review is the data structure for performance review, structured as follows:
```json
Review = {
    id: int,     // serial
    target: int, // employee id
}
```

One review may related to `0..+INF` feedbacks.

There are several points of potential performance improvement:
* Review could cache information that merges feedbacks(e.g. average rating.)
* Property `feedbacks` could be added to save all feedback that is related to the review.
    * If one is using relational database(e.g. MySQL) or NoSQL which supports efficient querying(e.g. [Google Firestore](https://cloud.google.com/firestore/docs/query-data/queries#simple_queries)), this improvement might not be necessary.

### Feedback

`Feedback` is the data structure for asignee's feedback to specific `Review`.

`Feedback` is structured as follows:
```json
Feedback = {
    id: int,        // serial
    review_id: int, // review id
    asigner: int,   // employee id
    asignee: int,   // employee id
    rating: float,  // in range [1, 5] with 1 digit.
    comment: text,
}
```

Property `review_id` indicates which `Review` does this feedback is related to. One feedback can only related to 1 review, but 1 review could be related to multiple feedbacks.