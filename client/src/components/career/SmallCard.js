import React from 'react'
import { useHistory } from 'react-router-dom'

function SmallCard({
  title = '',
  salary = '',
  icon = '',
  id = '',
  url1 = '',
  url2 = '',
}) {
  const history = useHistory()
  return (
    <div>
      <div class='card' style={{ border: 'none' }}>
        <div class='card-body'>
          <center>
            {/* <i class={icon} style={{ fontSize: 80 }}></i> */}
            <img src={icon} style={{ width: 100, height: 80 }} />
          </center>
          <figure class='text-center'>
            <blockquote class='blockquote'>
              <p>{title}</p>
            </blockquote>
            {/* <figcaption class="blockquote-footer">
              INR <cite title="Source Title">{salary}/-</cite>
            </figcaption> */}

            {/* <figcaption class="">
              Apply Now <i class="fas fa-long-arrow-alt-right"></i>
            </figcaption> */}

            <a href={url1}>
              <i class='fas fa-long-arrow-alt-right'></i>
            </a>
            <a href={url2}>
              <i class='fas fa-long-arrow-alt-right'></i>
            </a>

            <br />
            <button
              type='button'
              class='btn btn-outline-info'
              onClick={() => history.push('/creers/descp/' + id)}
            >
              Learn More <i class='fas fa-long-arrow-alt-right'></i>
            </button>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default SmallCard
