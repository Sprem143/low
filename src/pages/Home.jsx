import Carousel from 'react-bootstrap/Carousel';
export default function Home(){

    return(
        <>
<Carousel>
                <Carousel.Item>
                    <img src="/static/c-1.jpeg" className='carousel-img' alt="slide-01" text="First Image" />
                    <Carousel.Caption className='mb-4 c_text'>
                        <h1 ><b>Service one</b> </h1>
                        <p>Service description</p>
                        <button className='btn'>Know More</button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/static/c-2.avif" className='carousel-img' alt="slide 02" />
                    <Carousel.Caption className='mb-4 c_text'>
                    <h1 ><b>Service one</b> </h1>
                        <p>Service description</p>
                        <button className='btn'>Know More</button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/static/c-3.jpg" className='carousel-img' alt="slie 03" text="Slide 03" />
                    <Carousel.Caption className='mb-4 c_text'>
                    <h1 ><b>Service one</b> </h1>
                        <p>Service description</p>
                        <button className='btn'>Know More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}