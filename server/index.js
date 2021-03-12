const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(express.json());

//TODO: add DEBUG macro to CORS
app.use(cors());

const _mock = {
    review: {
        1: {
            id: 1,
            target: "Alice",
        },
        2: {
            id: 2,
            target: "Bob",
        },
        3: {
            id: 3,
            target: "Bob",
        },
        4: {
            id: 4,
            target: "Cathy",
        },
    },
    feedback: {
        1: {
            id: 1,
            review_id: 1,
            assigner: "Flora", // TODO: replace assigner name to employee id
            assignee: "Bob",   // TODO: replace assigner name to employee id
            score: 4.9,
            comment: "Always a pleasure to work with you!",
        },
        2: {
            id: 2,
            review_id: 1,
            assigner: "Flora",
            assignee: "Cathy",
            score: 3.0,
            comment: "Could reply email more often.",
        }
    },
    employee: {
        1: {
            id: 1,
            name: "Alice"
        },
        2: {
            id: 2,
            name: "Bob"
        },
        3: {
            id: 3,
            name: "Cathy"
        },
        4: {
            id: 4,
            name: "David"
        },
        5: {
            id: 5,
            name: "Eason"
        },
        6: {
            id: 5,
            name: "Flora",
            isAdmin: true,
        }
    }

}

app.get('/', (req, res) => {
    res.send('hello world');
});

// [ROUTER] employee
app.get('/employee', (req, res) => {
    res.json(_mock.employees);
});

app.post('/employee', (req, res) => {
    const data = req.body;
    console.log("create new user", { data });
    res.sendStatus(200);
});

app.get('/employee/:employee_id', (req, res) => {
    res.json(_mock.employees[req.params.employee_id]);
});

app.post('/employee/:employee_id', (req, res) => {
    const data = req.body;
    console.log("update employee data", data);
    res.sendStatus(200);
});

// [ROUTER] review
app.get('/review', (req, res) => {
    setTimeout(() => {
        res.json({
            reviews: _mock.reviews,
        });
    }, 3000);
});

app.get('/review/:id', (req, res) => {
    const { id } = req.params;
    if (!id in _mock.review) {
        res.sendStatus(404);
    }

    const review = _mock.review[id];
    console.log({feedbacks: Object.values(_mock.feedback).filter(feedback => feedback.review_id == id)});
    const feedbacks = Object.values(_mock.feedback).filter(feedback => feedback.review_id == id);
    res.json({
        ...review,
        feedback: [...feedbacks],
    });

});

app.get('/review/pending/:user_name', (req, res) => {
    setTimeout(() => {
        const { user_name } = req.params;
        res.json({
            result: Object.values(_mock.reviews).filter(review => review.reviewer === user_name),
        });
    }, 500);
})

app.post('/review/new', (req, res) => {
    const { target, reviewers } = req.body;
    console.log("new review created", { target, reviewers });
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
