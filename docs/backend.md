# Backend
## Framework
Node.js express package is used in the implementation.

## Database
At this point(2021.03.12) I'm only mocking data. No real database is used.

If we assume the system is not heavy loaded, i.e.
* 100 total users.
* Each employee are reviewd by other 99 colleagues.
    * 4,950 feedbacks per year.

In this assumption, a NoSQL database like Google Firestore might be my choice. A NoSQL database is easy to use and expand.