import HeaderUser from "../../component/header/header"

const Card = {
    render: () => {
        // localStorage.setItem('cart', JSON.stringify(product.data))
        const item = JSON.parse(localStorage.getItem('cart'))
        console.log(item);


        return `
        ${HeaderUser.render()}
        <!-- card begin -->
    <div class="container mx-auto justify-center p-8">
        <div class="flex justify-between w-[570px] h-[60px] mx-auto pb-8">
            <a href="/" class="flex text-lg font-semibold text-red-500" for="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pt-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Trở về</a>
            <label class="text-2xl font-bold text-red-500" for="">Giỏ hàng</label>
            <label for=""></label>
        </div>
        ${item.map((item) => `
        <div class="w-[570px] h-[250px] bg-white drop-shadow-md rounded-md mx-auto">
            <div class="grid grid-cols-3 gap-4 p-2">
                <div class="mx-auto p-4">
                    <img src="${item.image}"
                        width="193px" height="193px" alt="">
                </div>
                <div class="col-span-2">
                    <div class="mx-2">
                        <label class="text-xl font-semibold" for="">${item.name}</label><br>
                        <label class="text-red-500 font-medium" for="">${item.sale}</label><br>
                        <label class="font-normal" for="">
                            Chọn số lượng <input class="border border-black w-[100px] mx-4" type="number">
                        </label>
                    </div>
                    <div class="w-[345px] max-  h-[110px] bg-gray-200 border border-solid rounded-md mx-auto mt-4 font-normal">
                        <div class="mx-4">
                        <p> - Chương trình khuyến mãi :</p>
                        <label id="short" for="">
                        ${item.shortDesc}
                        </label>
                    </div>
                </div>
                </div>
            </div>
        `)}
        
        </div>
        <div class="w-[570px] h-[250px] bg-white border drop-shadow-md rounded-md mx-auto mt-2">
            <div class="flex justify-between ">
                   <p class="font-semibold">Tổng tiền tạm tính</p>
                   <p class="text-red-500">34.800.000 đ</p>
            </div>
            <div class="w-[570px] h-[60px] bg-red-700 border border-slate-300 rounded-md mx-auto text-center justify-center p-4 mt-2 my-1">
                <label class="text-white text-lg font-normal" for="">TIẾN HÀNH ĐẶT HÀNG</label>
            </div>
            <div class="w-[570px] h-[60px] bg-white border border-red-600 rounded-md mx-auto text-center justify-center p-4">
                <label class="text-red-600 text-lg font-normal" for="">CHỌN THÊM SẢN PHẨM KHÁC</label>
            </div>
        </div>
    </div>
        `
    }
}
export default Card