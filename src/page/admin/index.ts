import { cate, catebyId } from "../../api/cate"
import { List, Listbycate, Read, Remove, statusProd } from "../../api/product"
import Header from "../../component/header/admin"
import SidebarAdmin from "../../component/sidebar/admin"
import { rerender } from "../../ultilities/reRender"

const Admin = {
    render: async () => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (!user) {
            location.href = "/signin"
        }
        if (user.role != 1) {
            alert("Bạn không phải Admin")
            location.href = "/"
        }
        var data
        var cateID
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const rescate = urlParams.get('category')
        console.log(rescate);
        if (rescate) {
            data = await Listbycate(rescate)
            cateID = await catebyId(rescate)
            console.log(data);
        } else {
            data = await List()
        }
        let res = data.data
        console.log(res);

        const categ = await cate();

        return /*html*/`
        ${Header.render()}
        <div class="flex mt-3">
            <div class="w-[250px] flex-none">
            ${SidebarAdmin.render()}
            </div>
            <div class="bg-gray-100 w-full ">
                <div class="mx-10">
                    <div class="flex justify-between my-5">
                        <h1 class="text-xl">
                            Danh sách sản phẩm 
                        </h1>
                        <a data-navigo href="/admin/product/add" class="mr-5 border-blue-500 text-blue-500 border-4 rounded-md p-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg></a>
                    </div>
                </div>
                <div class="mx-10 flex">
                    <p class="font-bold py-1 mr-3 my-3">Bộ lọc: </p> 
                    <div class="flex-none">
                        <p class="my-1">Danh mục sản phẩm</p>
                        <select class="w-[400px] px-1 rounded-md py-2" name="" id="filter">
                        <option value="0"> ${cateID?.data.name} </option>
                            ${categ.data.map((item: Category) => `
                            <option value="${item.id}">${item.name}</option>`).join("")}
                            <option value="0"> Tất cả sản phẩm </option>
                            </select>
                    </div>
                </div>
                <table class="table-auto w-11/12 mx-auto my-5 text-center">
                    <thead>
                        <tr class="border-t-[1px] border-gray-500 h-14">
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Ảnh</th>
                        <th>Thành tiền</th>
                        <th>Mô tả</th>
                        <th>Ẩn/hiện</th>
                        <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${res.map((item: Product, index: number) => `
                        <tr id="list" class="border-t-[1px] border-gray-500 h-[160px] p-1">
                        <td >${index + 1}</td>
                        <td  class="w-[15%] mx-1">${item.name}</td>
                        <td><img class="w-[100px] mx-auto m-3" src="${item.image}"/></td>
                        <td class="text-center w-24 px-5" id="price_prod">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</td>
                        <td id="short" class="w-[100%] px-5">${item.shortDesc}</td>
                        <td>
                            <label for="default-toggle ${item.id}" class="inline-flex relative items-center cursor-pointer">
                                <input ${item.isDelete == false ? "checked" : ""} type="checkbox" value="${item.isDelete}" id="default-toggle ${item.id}" data-id="${item.id}" class="checkDel sr-only peer">
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="">
                        <button class="btnRemove" data-id="${item.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>    
                        </button>
                            <a data-navigo href="/admin/product/${item.id}/update"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg></a>
                        </td>
                        </tr>
                        `).join("")}
                    </tbody>
                </table>
                
            </div>
        </div>
        `
    }, afterRender: (id: number) => {
        //Filter
        const filter = document.getElementById('filter')
        filter?.addEventListener('change', async function (e: any) {
            const target = e.target.value
            console.log(target);

            if (target == 0) {
                history.replaceState(null, null, null)
                location.href = "/admin/products"
            }
            else {

                history.replaceState(null, null, `?category=${e.target.value}`)
                rerender('#app', Admin)
            }
        })
        const dataUser = localStorage.getItem("token")
        console.log(dataUser);
        if (dataUser?.length == "") {
            location.href = "/"
        }


        //Check
        const check = document.querySelectorAll(".checkDel")
        for (let chekced of check) {
            const status = chekced.dataset.id
            chekced.addEventListener('click', async function (e) {
                const data = await Read(status)

                console.log(data.data.isDelete);

                if (data.data.isDelete == true) {
                    const product: Product = {
                        id: status,
                        isDelete: false
                    }
                    await statusProd(product)
                } else {
                    const product: Product = {
                        id: status,
                        isDelete: true
                    }
                    await statusProd(product)
                }



            })
        }

        //Remove
        const btns = document.querySelectorAll("tbody .btnRemove")
        for (let btn of btns) {
            const id = btn.dataset.id
            btn.addEventListener('click', async function () {
                console.log(id);
                const action = confirm("Bạn có muốn xóa sản phẩm này ?")
                if (action) {
                    await Remove(id)
                    location.reload()
                }

            })

        }

        //logout
        const btnOut = document.querySelector("#logout")
        btnOut?.addEventListener('click', function () {
            console.log("hahahah");

            localStorage.removeItem('user')
            location.href = "/signin"
        })

    }
}


export default Admin