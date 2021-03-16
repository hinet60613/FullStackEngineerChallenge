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
            target: "Cathy",
        },
        4: {
            id: 4,
            target: "David",
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
        },
        3: {
            id: 3,
            review_id: 2,
            assignee: "Alice",
            pending: true,
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
            ..._mock.review,
        });
    }, 0); // TODO: set timeout to simulate database delay
});

app.get('/review/:id', (req, res) => {
    const { id } = req.params;
    if (!(id in _mock.review)) {
        res.sendStatus(404);
        return;
    }

    const review = _mock.review[id];
    console.log({ feedbacks: Object.values(_mock.feedback).filter(feedback => feedback.review_id == id) });
    const feedbacks = Object.values(_mock.feedback).filter(feedback => feedback.review_id == id);
    res.json({
        ...review,
        feedback: [...feedbacks],
    });

});

app.post('/review/new', (req, res) => {
    const { target, reviewers } = req.body;
    console.log("new review created", { target, reviewers });
    res.sendStatus(200);
});

// [ROUTER] feedback
app.get('/feedback/pending', (req, res) => {
    res.json({
        result: Object.values(_mock.feedback).filter(feedback => feedback.pending === true),
    });
});

app.get('/feedback/pending/:user_name', (req, res) => {
    setTimeout(() => {
        const { user_name } = req.params;
        res.json({
            result: Object.values(_mock.feedback).filter(feedback => feedback.pending === true && feedback.assignee === user_name),
        });
    }, 0); // TODO: set timeout to simulate database delay
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
