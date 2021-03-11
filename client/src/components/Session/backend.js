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


    doGetPerfReviewList = async (target) => {
        // TODO: refactor data fetching to a pack of SDK.
        fetch('http://127.0.0.1:8080/review')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                const filtered_data = data.reviews;//.filter(review => review.target == target)
                console.log({ filtered_data });
                //debugger;
                return filtered_data;
            })
            .catch(error => {
                throw error;
            });
    }

    doGetPerfReviewListByReviewer = (reviewer) => {
        // TODO: replace mock perf review list with real data.
        return {
            result: this.state.perf_review.filter(review => review.reviewer === reviewer),
        }
    }
}

export default Backend;