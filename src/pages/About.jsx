import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'




const About = () => {
  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='flex flex-col gap-16 my-10 md:flex-row'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
          <p>Luxora believes fashion is more than just clothing — it's an expression of who you are. Our carefully curated collections are designed to inspire confidence and elevate your everyday style.</p>
          <p> From timeless classics to modern trends, each piece is crafted with meticulous attention to detail, ensuring not just a fashionable look, but a luxurious experience. Luxora offers clothing that blends comfort with elegance, letting you step out in style every time</p>
          <p className='text-gray-800'>Our Mission</p>
          <p>Our mission is to create timeless, high-quality fashion that empowers individuals to express their unique style. We are dedicated to offering inclusive designs that cater to all body types, while embracing sustainability to reduce our environmental impact.</p>
        </div>
      </div>

      <div className='py-4 text-4xl'>
        <Title text1={'WHY'} text2={'CHOOSE US?'} />
      </div>
      <div className='flex flex-col mb-20 text-sm md:flex-row'>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure every garment meets the highest standards of quality, offering lasting comfort and flawless craftsmanship. Your satisfaction is our priority, and we guarantee only the best in every piece.</p>
        </div>

        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We prioritize your shopping experience. From easy browsing to fast, hassle-free delivery, we ensure every step is convenient and seamless. Shop with confidence, knowing we are here to make luxury fashion effortlessly accessible.</p>
        </div>

        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We pride ourselves on delivering exceptional customer service. Our dedicated team is always here to assist you with any inquiries, ensuring a smooth and enjoyable shopping experience.</p>
        </div>
      </div>
      <NewsletterBox/>

      
    </div>
  )
}

export default About