import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from '@faker-js/faker';
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const App = ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard/>
            <CommentDetail 
                author="Muhammad Islam" 
                timeAgo="Today at 4:45PM" 
                image={faker.image.avatar()} 
                content="Nice blog post"

            />
            <CommentDetail 
                author="Muhammad Muzammal" 
                timeAgo="Today at 2:00PM" 
                image={faker.image.avatar()} 
                content="I like the subject"

            />
            <CommentDetail 
                author="Muhammad Hamza" 
                timeAgo="Today at 5:00PM" 
                image={faker.image.avatar()} 
                content="I like the writing"

            />
            <CommentDetail 
                author="Muhammad Talha" 
                timeAgo="Today at 9:00AM" 
                image={faker.image.avatar()} 
                content="I like the topic"

            />
        </div>
    )
}; 




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <App/>
    </>
)





// Search these sites.
// https://semantic-ui.com/
// https://cdnjs.com/libraries/semantic-ui
// https://github.com/faker-js/faker
// https://fakerjs.dev/