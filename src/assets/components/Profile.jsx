import React from 'react'
import './index.css'
const Profile = () => {
    return (
        <div className='profile'>
            <div >
                <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' alt = 'background img' className='background-img'/>           
             </div>
            <div style={{ position:'absolute', top:'28%', left:'35%'}}>
                <img className='profile-img' src='https://avatars.githubusercontent.com/u/40597175?v=4' alt='tirth-img' />
            </div>
            <div style={{ textAlign: "center", marginTop:"20px", padding:"50px", height:'20px'}}>
                <p>Tirth Raval 25</p>
                <p>Dallas</p>
            </div>

            <div className='bottom-part'>
                <div className='bottom-items'>
                    <p><b>80K   </b></p>
                    <p>Followers</p>
                </div>
                <div className='bottom-items'>
                    <p>80K</p>
                    <p>Followers</p>
                </div>
                <div className='bottom-items'>
                    <p>80K</p>
                    <p>Followers</p>
                </div>
            </div>
        </div>
    )
}


export default Profile