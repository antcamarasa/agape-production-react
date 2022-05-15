// import React from 'react'
// import {Link} from "react-router-dom";
// import './VideoStyles.css'

// import agapeVideo from '..assets/video.mp4'

// const Video = () => {
//   return (
//     <div className='hero'>
//       <video autoPlay loop id='video'>
//         <source src={agapeVideo} type='video/mp4' />
//       </video>

//     <div className='content'>
//       <h1> Agapé production</h1>
//       <p>Société de production video</p>
//     </div>
//     <div>
//       <Link to="/contact" className='btn'></Link>
//     </div>
//     </div>
//   )
// }

// export default Video


// Galaxy

import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted playsinline id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Agapè production</h1>
                <p>Société de production video</p>
                <div>
                    <Link to='/contact' className='btn'>contact</Link>
                    {/* <Link to='/contact' className='btn btn-light'>contact</Link> */}
                </div>
            </div>
        </div>
    )
}

export default Video
