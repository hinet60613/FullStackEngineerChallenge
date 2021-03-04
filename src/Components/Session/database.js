class Database {
    constructor() {

    };

    doGetPerfReviewList = (target) => {
        // TODO: replace mock perf review list with real data.
        return {
            perf_review_list: [
                {
                    id: 1,
                    target: "Alice",
                    reviewer: "Bob",
                },
                {
                    id: 2,
                    target: "Alice",
                    reviewer: "Cathy",
                },
                {
                    id: 3,
                    target: "Alice",
                    reviewer: "David",
                },
            ]
        }
    }
}