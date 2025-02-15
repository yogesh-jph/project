 
export default function Log()
{
    return(

        <>
       
<div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8 mt-10"style={{backgroundImage: 'url("bbg1.jpg")'}}>
  <div class="w-full max-w-md space-y-8">
    <div>
     
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-white">Download Application Form</h2>
      
    </div>
    <form class="mt-8 space-y-6" action="connect.php" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div class="-space-y-px rounded-md shadow-sm">
      <div>
          <label for="name" class="sr-only">Name</label>
          <input id="name" name="name" type="text" autocomplete="name" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name"/>
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address"/>
        </div>
        <div>
          <label for="number" class="sr-only">Mobile Number</label>
          <input id="number" name="number" type="tel" autocomplete="mobile-number" required class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Number"/>
        </div>
      </div>

     

       

      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md bg-red-800 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
         Download
        </button>
      </div>
    </form>



    <h3 class="mt-6  text-2xl font-bold  text-white">*Infromation Regarding Admission is Advertised in Newspaper*</h3>
  </div>
  
</div>




        </>
    )
}