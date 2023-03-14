import React from 'react'
import '../Components/Structure.css'
import PropTypes from 'prop-types'
import add from "../add.png"

function Structure() {


  return (
    <div className='container '>
      <div className='main position-relative'>
        <div className='row position-realtive m-0 mt-4 p-0'>
          <div className='col-5 m-3 d-flex'>
            <div className='col-6 d-flex justify-content-end m-1 p-0 '>
              <h1>12</h1>
            </div>
            <div className='col-6 d-flex mt-1 flex-column'>
              <div className='col-12'>Jan</div>
              <div className='col-12'>2016</div>
            </div>
          </div>
          <div className='col-5 m-3 d-flex  justify-content-center align-items-center'>
            Monday
          </div>
          <hr />
          <div className='col-12 d-flex justify-content-center'>
            <ol className="list-group col-8">
              <li className="list-group-item">Hello  </li>

            </ol>
          </div>
        </div>
        <div className='col-12 d-flex justify-content-center image' id='display1'>
          <img src={add} />
        </div>
      <div className='col-12 d-flex inputElement' id='display2'>
     <input className='col-10' type='text'/><button className='col-2'>add</button>
     </div>
        
      </div>
    </div>
  )
}

Structure.propTypes = {}

export default Structure;
