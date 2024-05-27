import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
 


const Home = () => {
  return (
    <>
<div>
<Navbar/>

{/* <div>

<img alt="Tailwind CSS Navbar component" src="https://wallpapers.com/images/featured/4k-architecture-b3uwz18py1b0e5a7.jpg" className='h-auto max-w-screen-2xl'/>

    hi i am atanu barui

</div> */}


<div className="hero min-h-screen " style={{backgroundImage: 'url(https://wallpapers.com/images/featured/4k-architecture-b3uwz18py1b0e5a7.jpg)'}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<>
<div>
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="data:image/jpeg;base64,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" alt="ecommerce"/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">Color</span>
            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

</>



</div> 

<Footer/>

    </>
  )
}

export default Home
