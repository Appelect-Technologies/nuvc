import React from 'react';

function Thanku() {
    return (
        <div class=" text-center mt-5">
        <div >
        <i class="bi bi-award-fill"></i>
        </div>
        <div>
        <h1 >SucessFully Registered</h1>
        </div>
        
        <div >
          <h4 class="card-title">You have Successfully Registerd for the  </h4>
          <h5 class="card-text">Job Profile:{}</h5>
          <h5> UserName:{}</h5>

          <a href="/home" class="btn btn-success ">Home</a>
        </div>
      
      </div>

    );
}
export default Thanku;