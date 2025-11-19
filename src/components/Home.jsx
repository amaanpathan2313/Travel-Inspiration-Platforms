
import React from 'react';

function Home() {

    return (
        <>
            <div className='section1'>
                <div className='img-box'>
                    <img src="https://pathway-aashu.vercel.app/assets/header-1.jpg" className='img1' alt="img1" />
                    <img src="https://pathway-aashu.vercel.app/assets/header-2.jpg" className='img2' alt="img2" />
                </div>

                <div className='txt-box'>
                    <h4 style={{ color: '#3685FB', marginLeft: '5vw' }}> Explore Now</h4>

                    <h1 style={{ marginLeft: '5vw', margin: '20px', fontSize: '7vh' }}>The Smiling 😊, <br />
                        agent for travel</h1>

                    <p style={{ width: '35vw', marginLeft: '30px', fontWeight: '540', lineHeight: '3vh' }}> <span> "The world is full of wonders — go find yours. Every journey begins with a single step, and ends with unforgettable memories. Travel not just to see, but to feel alive." </span> </p>

                </div>

            </div>
            {/* secion -- 2 */}

            <div className='section2'>

                <h1>Explore top destinations</h1>
                <p><span>Explore your suitable and dream places around the world. Here you can find your right destination.</span></p>



                <div class="card-container">
                    <div class="card">
                        <img src="https://pathway-aashu.vercel.app/assets/destination-1.jpg" alt="Image" />
                        <div class="card-text">  Banff Canada </div>
                    </div>
                    <div class="card">
                        <img src="https://pathway-aashu.vercel.app/assets/destination-2.jpg" alt="Image" />
                        <div class="card-text">Machu Picchu Peru</div>
                    </div>
                    <div class="card">
                        <img src="https://pathway-aashu.vercel.app/assets/destination-3.jpg" alt="Image" />
                        <div class="card-text">Lauterbrunnen Switzerland</div>
                    </div>
                    <div class="card">
                        <img src="https://pathway-aashu.vercel.app/assets/destination-4.jpg" alt="Image" />
                        <div class="card-text">Zhangjiajie China</div>
                    </div>


                </div>
            </div>


            {/* section--3 */}

            <div className='section3'>
                <div>
                    <h1> Our Gallery</h1>
                    <h2 style={{textAlign: 'center', margin: '20px'}}>Our trip gallary that will inspire you</h2>
                    <p style={{textAlign: 'center', margin: '20px'}}>Explore your suitable and dream places around the world. Here you can find your right destination.</p>
                </div>

                <div class="g-box">
                     <div> <img src="https://plus.unsplash.com/premium_photo-1683140766566-3ecdcf5a02e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" alt="" style={{width: '100%', height:'40vh'}}/></div>
                     <div> <img src="https://pathway-aashu.vercel.app/assets/gallery-2.jpg" alt="" style={{width: '100%', height: '40vh'}}/></div>
                     <div> <img src="https://pathway-aashu.vercel.app/assets/gallery-3.jpg" alt="" style={{width: '100%', height: '80vh'}}/></div>
                     <div> <img src="https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fHww" alt="" style={{width: '100%', height: '80vh'}}/></div>
                     <div> <img src="https://pathway-aashu.vercel.app/assets/trip-2.jpg" alt="" style={{width: '100%', height: '40vh'}}/></div>
                     <div> <img src="https://pathway-aashu.vercel.app/assets/trip-3.jpg" alt="" style={{width: '100%', height: '40vh'}}/></div>
                     <div> <img src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" alt="" style={{width: '100%', height: '40vh'}}/></div>
 
                </div>

            </div>
        </>
    )

}

export default Home;