import { catebyId } from "../../api/cate"
import { Listbycate, Read } from "../../api/product"
import Footer from "../../component/footer/footer"
import HeaderUser from "../../component/header/header"

const DetailProd = {
  render: async (id: any) => {
    const data = await Read(id)
    const res: Product = data.data
    const idCate = res.category
    const dataCate = await catebyId(idCate)
    const resCate: Category = dataCate.data
    const ProdByCate = await Listbycate(idCate)
    const resProdByCate: Product = ProdByCate.data


    return /*html*/ `
        ${HeaderUser.render()}
        <div class="bg-gray-100 drop-shadow-md py-2">
      <div class="container mx-auto">
        <a class="mr-5" href="/">Trang chủ</a>
        <a class="mr-5" href="#">${resCate.name}</a>
        <a class="mr-5" href="#">${res.name}</a> 
      </div>
    </div>
    <div class=" border-b">
      <div class="container text-xl py-2 mx-auto ">
        ${res.name}
      </div>
    </div>
    <div class="container mx-auto grid grid-cols-4 gap-10 my-10">
      <!-- Show Image -->
      <div class="">
        <img class="mb-3" src="${res.image}" alt="">
        <div class="flex">
          <div class="w-[60px] h-[60px] border border-red-600 mr-2 rounded-md text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mx-auto mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <p class="text-[10px] text-center -mt-1">
            Tính năng nổi bật
          </p>
          </div>
          <div class="w-[60px] h-[60px] border-gray-400 border-2 mr-2 rounded-md">
            <img src="${res.image}" alt="">
          </div>
          <div class="w-[60px] h-[60px] border-gray-400 border-2 mr-2 rounded-md">
            <img src="${res.image}" alt="">
          </div>
          <div class="w-[60px] h-[60px] border-gray-400 border-2 mr-2 rounded-md">
            <img src="${res.image}" alt="">
          </div>
          <div class="w-[60px] h-[60px] border-gray-400 border-2 mr-2 rounded-md">
            <img src="${res.image}" alt="">
          </div>
        </div>
      </div>
      <!-- Show Image -->

      <!-- Show body -->
      <div class="col-span-3 items-end">
        <div class="">
          <div class="">
            <div  class="text-2xl text-red-500">
              <div id="sale">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(res.sale)}</div>
      </div>
      <div  class="text-gray-500 mt-2 ml-2" >
        <div id="price" > ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(res.price)} </div>
          <div>
          </div>
          <div class="mt-5" >
            ${res.shortDesc}
      </div>
      </div>
      <div class="flex pt-64" >
        <a href="#" >
          <div class="bg-red-500 px-20 py-[20px] text-white rounded-sm" > Mua Ngay </div>
        </a>
        <button id="add-cart">
        <div class="border border-red-500 text-red-500 w-[65px] h-[65px] mx-4 rounded-md" >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  mx-auto mt-4" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor" stroke - width="2" >
              <path stroke - linecap="round" stroke - linejoin="round" d = "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </div>
  </button>
            <div class="w-20 text-lg text-center font-medium" >
              Thêm vào giỏ hàng
            </div>
        </div>
  </div>
      </div>
  </div>  
  </div>
        <!--Show body-->

        <!--Similar products-->
        <div class="container mx-auto my-5" >
          <h1 class="text-xl" > Sản phẩm cùng loại </h1>
        <div class="my-5 grid grid-cols-5 gap-4" >
        ${resProdByCate.map((item: Product) => `
        <a href="/product/${item.id}">
            <div class="drop-shadow-sm min-h-[400px] max-h-[400px]  rounded-md border">
            <div class="w-full h-1/2 p-5">
              <img class="w-11/12 h-[240px]  mx-auto" src="${item.image}" alt="">
              </div>
              <div class="px-5 font-medium">
                  ${item.name}
              </div>
              <div class="flex px-5 py-1">
                <div class="text-red-500 text-lg">
                  ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.sale)}
                </div>
              <div class="text-gray-500 mx-2">
                ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
              </div>
              </div>
              </div>
        </a>
        `).join("")}
        </div>
        </div>
        <div class="container mx-auto bg-gray-100 rounded-md py-5" >
          <h1 class="text-red-500 text-base font-semibold text-center pb-5" >
            ĐẶC ĐIỂM NỔI BẬT
          </h1>
          <p class="mx-10" >
            ${res.salientfeatures}
          </p>
        </div>

        <div class="container mx-auto mt-5 mb-36" >
          ${res.longDesc}
        </div>

        ${Footer.render()}
        `
  },
  afterRender: (id) => {
    const addCart = document.querySelector("#add-cart")
    addCart?.addEventListener('click', async function () {
      const product = await Read(id)
      console.log(product.data)
      let cart = []
      localStorage.setItem('cart', JSON.stringify(product.data))
      const showcart = localStorage.getItem('cart')
      console.log(showcart.name);



    })


  }
}
export default DetailProd