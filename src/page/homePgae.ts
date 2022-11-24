import { Filter, List } from "../api/product"
import Footer from "../component/footer/footer"
import HeaderUser from "../component/header/header"
import { rerender } from "../ultilities/reRender"

const HomePage = {
  render: async () => {
    var data
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const rescate = urlParams.get('q')
    if (rescate) {
      data = await Filter(rescate)
    }
    else {
      data = await List()

    }

    const res: Product = data.data
    const newRes = res.filter(function (prod) {
      return prod.isDelete == false
    })

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
    <div class="container mx-auto grid 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3    ">
      ${newRes.map((item: Product) => `
      <a href="/product/${item.id}">
            <div class="p-3 drop-shadow-md border rounded-md min-h-[410px]">
          <img class="p-1 w-11/12 h-[200px] mx-auto" src="${item.image}" alt="">
          <div id="name">${item.name}</div>
          <div class="my-3 flex">
            <div id="sale" class="text-red-500">
              ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.sale)}
            </div>
            <div id="price" class="text-gray-400 mx-5 text-sm mt-1">
            ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
            </div>
          </div>
          <div id="short" class="bg-gray-200 h-[200px] rounded-md p-1">
          ${item.shortDesc}
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

    //Sugges

    // const inputSearch = document.querySelector("#inpSearch")
    // inputSearch?.addEventListener('keyup', async function () {
    //   console.log(inputSearch?.value);
    //   const res = await List()
    //   const resdata: Product = res.data
    //   const newRes = resdata.filter(function (prod) {
    //     return prod.name !== inputSearch?.value
    //   })
    //   console.log(newRes);

    // const formSugges = document.querySelector("#sugges")
    // formSugges.classList = `bg-white w-[300px] h-[100px]`
    // formSugges.innerHTML = return `
    // ${}      `

    // })
    //Search
    const btnSearch = document.querySelector("#search")
    btnSearch?.addEventListener('click', async function () {
      const inputSearch = document.querySelector("#inpSearch")?.value
      console.log(inputSearch);
      history.replaceState(null, null, `?q=${inputSearch}`)
      rerender('#app', HomePage)
    })

    //Logout
    const logout = document.querySelector("#lognout")
    logout?.addEventListener('click', function () {
      localStorage.removeItem('user')
      location.href = "/signin"
    })
  }

}
export default HomePage