import React from 'react';

function Project1() {
    return(
        <div style={style}>
            <strong>
                Scaling the backend is crucial when it comes to handling mass amount of users.
                I took an ecommerce product page, the photo carousel to be exact, and optimized the overall performance.
            </strong>
            
            <div style={space1}></div>
            
            <div>
               This code-base had no optimization and at the moment only held about 100 data.
               This means that having more users may slow down the server or even crashing it.
               The solution is to perform horizontal scaling.
            </div>

            <div style={space1}></div>

            <div>
               The first challenge was to find a database that best fits my service.
                It does not need to write any data, only need the ability to read files quickly.
                I decided to benchmark three different databses: Mongo, Cassandra and Postgres. 
                These numbers are all fast and may not be statistically significant. However here are the results:
                Mongo & Cassandra querying time was 2-16ms very incosistently. Querying data over 10 million crashed the server.
                Postgres was consistently under 2ms, most times at 1ms. I believe relational databases are best fit for applications 
                that only need to read files.
            </div>

            <div style={space1}></div>    


            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/SDC(2).png?alt=media&token=877b0a83-88a8-40f5-ad59-b6b99bda20a7'
                style={img}
                />

            
            <div style={space1}></div>

            <div>
                I implemented simple indexing of postgres database and tested with many virutal users to mimick a real-life situation.
                The results were as follows: 0% error rate, 1.58 requests per second and 1.8 ms response time. 
                Currently, I am looking into incorporating a binary search tree to speed up the query time even further.
                Two further things I am currently researching is caching and load-balancer. 
                Caching would be the most simple in terms of implementation.
                Because many products are 'fad' based, we could cache similar product requests and serve up the data that way.
                Lastly, load-balancer would help efficiently distribute the workload on different servers.
            </div>

            <div style={space1}></div>

            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/SDC(1).png?alt=media&token=ff6e2172-9594-4fac-bc4a-a8998cf8a155'
                style={img}
                />

            <div style={space1}></div>

            <div>
                Technologies used: <i>Javascript, React.js, Express, Postgresql, Node.js, New Relic, K6, AWS EC2, Webpack, Babel </i>
            </div>

            <div style={space1}></div>

        </div>
    )
}

const style = {
    fontSize: '14px'
}

const space1 = {
    height: '20px'
}

const img = {
    width: '100%'
}

export default Project1;