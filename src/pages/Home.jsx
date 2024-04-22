import Carousel from 'react-bootstrap/Carousel';
export default function Home() {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src="/static/c-1.jpeg" className='carousel-img' alt="slide-01" text="First Image" />
                    {/* <Carousel.Caption className='mb-4 c_text'>
                        <h1 ><b>Service one</b> </h1>
                        <p>Service description</p>
                        <button className='btn'>Know More</button>

                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/static/c-2.avif" className='carousel-img' alt="slide 02" />
                    {/* <Carousel.Caption className='mb-4 c_text'>
                    <h1 ><b>Service one</b> </h1>
                        <p>Service description</p>
                        <button className='btn'>Know More</button>

                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/static/c-3.jpg" className='carousel-img' alt="slie 03" text="Slide 03" />
                    {/* <Carousel.Caption className='mb-4 c_text'>
                    <h1 ><b>Service one</b> </h1>
                        <p>Service description</p>
                        <button className='btn'>Know More</button>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>


            {/* Introduction */}
            <section className='dfdr w-100 intro_section'>
                <div className='intro'>
                    <h2 className='mb-3'>Introduction</h2>
                    <p>Welcome to the Samrat Choudhary Law Firm, where expertise meets excellence in legal representation. Founded in 2024 by Samrat Choudhary, Esq., our firm is committed to providing unparalleled legal services across a spectrum of practice areas.
                        <br />
                        &emsp; &emsp;   With a focus on banking and insurance law, civil litigation, and corporate law, our team brings a wealth of experience and a track record of success to every case we handle. Whether you're a financial institution seeking regulatory guidance, an individual navigating a civil dispute, or a corporation in need of strategic legal counsel, we are here to advocate for your rights and interests with unwavering dedication.
                        <br />


                        &emsp; &emsp; Driven by a commitment to integrity, professionalism, and client satisfaction, Samrat Choudhary Law Firm is your trusted partner in navigating the complexities of the legal landscape. Contact us today to learn how we can assist you with your legal needs. <br />
                        Beyond our core practice areas, we also offer comprehensive services in criminal law, drawing upon our collective expertise to provide robust defense representation when needed.

                        &emsp; &emsp;  Conveniently located at Radha Kunj near Bargach Chowk, Bari Khanjarpur, Bhagalpur, Bihar, our corporate office serves as a hub for our statewide operations. While based in Bhagalpur, we proudly serve clients across the entirety of Bihar, ensuring access to exceptional legal representation wherever you are in the state.

                        <br />
                        &emsp; &emsp; At Samrat Choudhary Law Firm, we understand that each legal matter is unique, which is why we approach every case with personalized attention and a tailored strategy. Our team combines deep legal knowledge with innovative thinking to achieve optimal outcomes for our clients.
                    </p>
                </div>
                <div className='photo dfdc jcac p-3'>
                    <img src="/static/sm.jpg" alt="" width="400" />
                    <h5 className='mt-2'>Mr. Samrat Chaudhary</h5>
                </div>
            </section>
            <section className="strength ">
                <h3 className='text-center mb-3'>Our Strength</h3>
                <div className=" text-container">
                    <div className='first_str'>
                        <p>With the values of Honesty and Integrity, Dedication, Transparency in Communication and Diligence and Accountability that we imbibe, we cater to a wide spectrum of clients and are committed to be the finest corporate consultants in India. We represent Big Corporates & Prominent Individuals including Fortune 500 companies and also offer consultants for foreign collaboration.</p>
                    </div>
                    <div className='ms-3 mt-4'>
                        <p>We offer panoply of services to our clients, with dedicated professionals in Corporate Law, Foreign Investment, Employment and Labour laws, Pharma and Healthcare, Bankruptcy, Real Estate, Start-ups, Infrastructure, E-commerce, and many more. We believe in exceeding the expectation of our clients’ needs efficiently, giving them quality service and customized solutions for them to achieve optimum results through our services.</p>
                    </div>
                </div>
            </section>

            {/* get in touch */}
            <section className='getintouch dfdc p-2 jcac'>
                <h3 className='text-center mb-4 mt-4'>Get <b>In touch</b></h3>
                <div className='dfdr se form_cont'>
                    <div className='me-4'>
                        <input className ="mb-3" type="text" placeholder='Name' />
                        <input className ="mb-3" type="text" placeholder='Email' />
                    </div>
                    <div >
                        <input className ="mb-3" type="text" placeholder='Phone' />
                        <input className ="mb-3" type="text" placeholder='Subject' />
                    </div>

                </div>
                <textarea style={{width:"65vw"}} name="" id="" cols="47" rows="5" placeholder='Message' className='p-2'></textarea>
                <button className='btn btn-primary p-2 mt-3' style={{width:"20vw"}}>Submit</button>
            </section>
        </>
    )
}