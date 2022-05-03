import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-3 mb-5'>
            <h2>Difference between javascript and nodejs</h2>
            <p>
            Javascript is a programming language it’s used for writing scripts on a website. NodeJS is a Javascript runtime environment. Javascript basically used on the client side and NodeJS is mostly used on the server side. We use Javascript in frontend development and we use Nodejs in server-side development. Javascript is capable to add HTML and play with the DOM but Nodejs has not capability to add HTML tags. Examples of javascript frameworks is RamdaJS, TypedJS, etc. Examples of Nodejs modules is Lodash, express, etc.
            </p>
            <h2>Differences between SQL and NOSQL databases</h2>
            <p>SQL is a relational database management system (RDBMS) and NoSQL is a Non-relational or distributed database system. SQL databases have fixed/static/predefined schema but NoSQL has dynamic schema. SQL databases are not appropriate for hierarchical data storage but NoSQL databases are appropriate for hierarchical data storage. SQL databases Follow ACID (atomicity, consistency, isolation, and durability) property and NoSQL databases follow CAP(consistency, availability, partition tolerance).</p>
            <h2>What is the purpose of JWT and how does it work</h2>
            <p>
            JWT (JSON Web Token) is used to share security information between the client site and the server site. JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm. We use JWT to ensure the authenticity of the data.
            </p>
            <p><strong>How does it work?</strong></p>
            <p>
            When the user login by username and password or google/Facebook/Github the authentication server verifies user credentials and then issues a JWT signed by using a secret salt or a private key. Then user client site uses the JWT to access the protected route by passing the JWT in HTTP authorization header. The server then verifies the authenticity of the token by the secret salt/ public key and in this process, JWT works.
            </p>
        </div>
    );
};

export default Blogs;