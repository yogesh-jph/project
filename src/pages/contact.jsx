

export default function Contact()
{
    return(
        <>


<div class="isolate bg-gray-100 py-24 px-6 sm:py-32 lg:px-8 mt-9" style={{backgroundImage: 'url("bbg1.jpg")'}}>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">CONTACT US</h2>
    <p class="mt-2 text-lg leading-8 text-gray-600"></p>
  </div>
  <form action="https://formsubmit.co/79bc3dce2637b9d583fa70132c323590" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
    <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
      <div>
        <label for="first-name" class="block text-sm font-semibold leading-6 text-white">First name</label>
        <div class="mt-2.5">
          <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Last name</label>
        <div class="mt-2.5">
          <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
     
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
        <div class="mt-2.5">
          <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
 
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm font-semibold leading-6 text-white"> Your Message</label>
        <div class="mt-2.5">
          <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-red-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">SEND MESSAGE</button>
    </div>
  </form>
</div>

        </>
    )
}