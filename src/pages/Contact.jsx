import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'



const Contact = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="flex flex-col justify-center gap-10 my-10 md:flex-row mb-28">
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-gray-600'>Our Store</p>
          <p>54179 Williams Green <br /> Suite 350, California, USA</p>
          <p className='text-gray-600'>Tel:(7845) 546-012 <br />Email:admin@luxora.com</p>
          <p className='text-xl font-semibold text-gray-600' >Career at Luxora</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration=75'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact