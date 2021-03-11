const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(express.json());

//TODO: add DEBUG macro to CORS
app.use(cors());

const _mock = {
    reviews: [
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
        {
            id: 4,
            target: "Bob",
            reviewer: "Cathy",
        },
        {
            id: 5,
            target: "Bob",
            reviewer: "David",
        },
        {
            id: 6,
            target: "Cathy",
            reviewer: "David",
        },
    ],
    feedback: {
        // review_id: {
        //     review_id: int,
        //     score:     float,
        //     comment:   text,
        // }
        1: {
            review_id: 1,
            score: 4.9,
            comment: "Always a pleasure to work with you!",

        },
        2: {
            review_id: 2,
            score: 3.0,
            comment: "Could reply email more often.",
        }
    },
    employees: {
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
    }
}

app.get('/', (req, res) => {
    res.send('hello world');
});

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

app.get('/review', (req, res) => {
    setTimeout(() => {
        res.json({
            reviews: _mock.reviews,
        });
    }, 3000);
});

app.get('/review/:id', (req, res) => {
    const { id } = req.params;
    const result = _mock.reviews.filter(review => review.id == id);
    if (result.length === 0) {
        res.sendStatus(404);
    } else {
        res.json({
            result: result[0],
        });
    }
});

app.get('/review/pending/:user_name', (req, res) => {
    const { user_name } = req.params;
    setTimeout(() => {
        res.json({
            result: Object.values(_mock.reviews).filter(review => review.reviewer === user_name),
        });
    }, 2000);
})

app.post('/review/new', (req, res) => {
    const { target, reviewers } = req.body;
    console.log("new review created", { target, reviewers });
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
