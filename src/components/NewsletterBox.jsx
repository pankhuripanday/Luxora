const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault()
        alert('You have subscribed successfully!')

    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 '>Unlock 20% off—Subscribe!</p>
        <p className="mt-3 text-gray-400">Join our newsletter for exclusive deals and 20% off your first buy!</p>
        <form onSubmit={onSubmitHandler} className="flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2">
            <input className="w-full outline-none sm:flex-1" type="email" placeholder="Enter your email" required/>
            <button type="submit" className="px-10 py-4 text-xs text-white bg-black">SUBSCRIBE</button>
        </form>

    </div>
  )
}

export default NewsletterBox