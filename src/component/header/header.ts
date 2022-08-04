const HeaderUser = {
  render: () => {
    console.log("hahahahss");

    return `
        <div class="h-[64px] bg-[#D70018]">
      <!-- Header -->
      <div class="container mx-auto flex justify-start">
        <a href="/">
          <img class="w-[200px] -mb-2" src="https://res.cloudinary.com/thisisninh/image/upload/v1659420756/cellphones-logo_lsv99x.png" alt="">
        </a>
        <div id="" class="my-4 mx-10 bg-white rounded-md flex border-black border" >
          <button id="search"  class="border-black border-r" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
          <input type="text" class="w-[533px] h-[34px] rounded-md border-black" name="" id="inpSearch">
        </div>
        <div class="text-white flex">
          <a class="my-2 mx-6" href="#">Gọi mua hàng<br> 1800.2097</a>
          <a class="flex w-[150px] my-2" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="my-1  h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>Cửa hàng <br> gần bạn
          </a>
          <a class="flex w-[150px] my-2 -mr-5" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>Tra cứu <br> đơn hàng
          </a>
          <a class="flex w-[100px] my-2 " href="/card">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Giỏ hàng
          </a>
          <a class="flex w-[100px] my-2 " href="/admin/products">
          <svg xmlns="http://www.w3.org/2000/svg"  class="h-10 w-10 my-1 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
          </a>
        </div>  
      </div>
     </div>
        `
  },

}
export default HeaderUser