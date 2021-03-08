class Backend {
    constructor() {
        this.state = {
            auth: null,
            perf_review: [
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
            ],
        }
    };

    doSignInAdmin = () => {
        this.state.auth = {
            display_name: "Admin",
            isAdmin: true,
        };
    }

    doSignIn = (user_name) => {
        this.state.auth = {
            display_name: user_name,
            isAdmin: false,
        };
    }

    doSignOut = () => {
        this.state.auth = null;
    }


    doGetPerfReviewList = (target) => {
        // TODO: replace mock perf review list with real data.
        return {
            result: this.state.perf_review.filter(review => review.target == target),
        }
    }
    doGetPerfReviewListByReviewer = (reviewer) => {
        // TODO: replace mock perf review list with real data.
        return {
            result: this.state.perf_review.filter(review => review.reviewer == reviewer),
        }
    }
}

export default Backend;