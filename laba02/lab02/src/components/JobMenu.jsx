import React from "react";
import JobList from "./JobList";

const JobMenu = () => {
    const JobArray = ["miner", "doctor", "programmer", "teacher", "Car mechanic"];


    return (
        <div className="Job">
            <h1>Task 2</h1>
            <form action="">
                {JobArray.map((JobArray) =>
                    <JobList key={JobArray}>{JobArray}</JobList>
                )}
            </form>
        </div>
    );
}

export default JobMenu;