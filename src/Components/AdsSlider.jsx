
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





function AdsSlider() {

  const  allFeedback  = [
    {
      "id": "1",
      "clientName": "Alex Groshvin",
      "image": "https://i.ibb.co/4sFynGN/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
      "comment": "I cannot thank Elegant enough for making my wedding day truly magical!. Highly recommended for any special occasion!"
      
    },
    {
      "id": "2",
      "clientName": "Elizabeth Growth",
      "image": "https://i.ibb.co/9g2ySSZ/christopher-campbell-r-DEOVt-E7v-Os-unsplash-1.jpg",
      "comment": "Elegant exceeded our expectations in planning and our daughter's birthday, stress-free the event. Great job!"
      
    } ,
    {
      "id": "3",
      "clientName": "Elizabeth Growth",
      "image": "https://i.ibb.co/9g2ySSZ/christopher-campbell-r-DEOVt-E7v-Os-unsplash-1.jpg",
      "comment": "Elegant exceeded our expectations in planning and our daughter's birthday, stress-free the event. Great job!"
      
    } 
  ]

  const settings = {
    dots: true,
    infinite: true, 
    speed: 500, 
    autoplay: true, 
    autoplaySpeed: 1700,
    slidesToShow: 1, 
    slidesToScroll: 1, 
  };

  return (
    <div className="autoplay-slider mb-14 mx-auto" >
      <Slider {...settings}>

       {allFeedback.map(feedback => {
        return (
          <>
           <div className='bg-gray-100 p-[26px] md:p-8 flex flex-col justify-center items-center gap-3 h-56 md:h-64 lg:h-80'>
          <h4 className='text-[15px] md:text-[16px] font-semibold text-gray-500'> {feedback.comment}</h4>
          <img className='w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full object-cover' src={feedback.image}/>
          <h2 className='font-semibold text-lg'> {feedback.clientName} </h2>
        </div>
          </>
        )
       })}
        
      </Slider>
    </div>
  );
}

export default AdsSlider;