import React from "react";
import Segment from "./Segment";

const Exercise = ()=>{
    return(
        <div>
            <Segment>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No documents are listed for this customer.
                </div>
                <div className="ui primary button">Add Document</div>
           </Segment>
            <Segment>
                <h4 className="ui header">For Your Information</h4>
                <p>The quick bronw fox jumps over the lazy dog. Pakistan is our home land...</p>
                </Segment>
        </div>
    );
}



export default Exercise;