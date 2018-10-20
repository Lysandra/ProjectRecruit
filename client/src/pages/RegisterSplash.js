import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';


class RegisterSplash extends Component {
  render(){
    return (
    <div>
      <Grid className="grid">
        <Link to="/create/recruiter">
            
              <img
                 src="https://pbs.twimg.com/profile_images/978374211801665538/Scj1ltjx_400x400.jpg"
                 alt="trilogy"
                 className="trilogy-image"
          
              />
             <p>I'm a Recruiter</p>
        </Link>
      

          <Link to="/create/candidate">
               
            <img
              src="https://pbs.twimg.com/profile_images/978374211801665538/Scj1ltjx_400x400.jpg"
              alt="trilogy"
              className="trilogy-image"
          
              />    
                <p>I'm a Candidate</p>
            </Link>
            
      </Grid>
     </div>
    )
  }
}
export default RegisterSplash;
