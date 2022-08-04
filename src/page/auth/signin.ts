const Signin = {
    render: () => {
        return `
        <div class="items-center ">
            <div class="grid grid-cols-3 w-[800px] h-[508px] mx-auto border rounded-md my-[200px]">
                <div class="col-span-2 my-[140px] mx-auto">
                <div class="">
                <label class="font-bold text-lg" for="">Email</label>
                <br>
                <input class="w-[400px] h-[48px] my-2 border border-black rounded-md" type="text" id="email">
                </div> 
                <div class="">
                <label class="font-medium" for="">Password</label>
                <br>
                <input class="w-[400px] h-[48px] my-2 border border-black rounded-md" type="password" id="password">
                </div>
                <button  class="w-[400px] h-[48px] border bg-[#FF424E] text-white rounded-md">Đăng nhập</button>
                <br>
                <a class="text-blue-500 hover:underline" href="/signup">Đăng ký ngay</a>

            </div>
            <div class="bg-gray-200 h-[505px] rounded-r-md">
                <img class="w-[185px] mx-auto my-[170px]" src="public/290707804_583841913337957_8588693790177220222_n.png" alt="">
            </div>
            </div>
        
        </div>
        `
    }
}
export default Signin

