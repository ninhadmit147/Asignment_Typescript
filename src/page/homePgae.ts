import { Filter, List } from "../api/product"
import Footer from "../component/footer/footer"
import HeaderUser from "../component/header/header"

const HomePage = {
  render: async () => {
    var data
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    const rescate = urlParams.get('q')
    console.log(rescate);
    if (rescate) {
      data = await Filter(rescate)
      console.log(data);

    }
    else {
      data = await List()

    }
    const res: Product = data.data


    return `
        ${HeaderUser.render()}
        <!-- Navbar -->
    <div class="container mx-auto grid grid-cols-4 my-3">
      <div class="">
        <a class="mt-2" href="/mobile">
          <div class="flex w-[300px] rounded-md hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] h-[40px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <p class="text-base my-2">Điện thoại</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-[140px] my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
        <a class="mt-2" href="/laptop">
          <div class="flex w-[300px] rounded-md hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] h-[40px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p class="text-base my-2">Máy tính </p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-[150px] my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
        <a class="mt-2" href="/tables">
          <div class="flex w-[300px] rounded-md hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] h-[40px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <p class="text-base my-2">Máy tính bảng</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-[110px] my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
        <a class="mt-2" href="/gear">
          <div class="flex w-[300px] rounded-md hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] h-[40px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <p class="text-base my-2">Phụ kiện</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-[150px] my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      </div>
      <div class="col-span-3">
        <img src="public/image/Untitled.png" alt="">
      </div>
    </div>
    <!-- Navbar -->

    <!-- Body -->
    <div id="title" class="container mx-auto text-2xl">
      SẢN PHẨM MỚI NHẤT

    </div>
    <div class="grid 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mx-10">
      ${res.map((item: Product) => `
      <a href="/product/${item.id}">
            <div class="p-3 drop-shadow-md border rounded-md min-h-[450px]">
          <img class="p-1 w-11/12 h-[200px] mx-auto" src="${item.image}" alt="">
          <h1 id="name">${item.name}</h1>
          <div class="my-3 flex">
            <div id="sale" class="text-red-500">
              ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.sale)}
            </div>
            <div id="price" class="text-gray-400 mx-5 text-sm mt-1">
            ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
            </div>
          </div>
          <div id="short" class="bg-gray-200 rounded-md p-1">
          ${item.shortDesc}
          </div>
          <div class="flex mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p class="text-sm">72 Đánh giá</p>
          </div>
        </div>
      </a>
      `).join("")}
      

    </div>
    <!-- Body -->
    ${Footer.render()}
        `
  },
  afterRender: () => {

    const btnSearch = document.querySelector("#search")

    btnSearch?.addEventListener('click', async function () {
      const inputSearch = document.querySelector("#inpSearch")?.value
      console.log(inputSearch);
      history.replaceState(null, null, `?q=${inputSearch}`)
      location.reload()
    })
  }

}
export default HomePage