const Signup = {
    render: () => {
        return `
        <div class="items-center ">
            <div class="grid grid-cols-3 w-[800px] h-[508px] mx-auto border rounded-md my-[200px]">
                <div class="col-span-2 my-[95px] mx-auto">
                <div class="">
                <label class="font-bold text-lg" for="">Email</label>
                <br>
                <input class="w-[400px] h-[48px] my-2 border border-black rounded-md" type="email" id="email">
                </div> 
                <div class="">
                <label class="font-medium text-sm" for="">Số điện thoại</label>
                <br>
                <input class="w-[400px] h-[48px] my-2 border border-black rounded-md" maxlength="10" type="number" id="numberPhone">
                </div> 
                <div class="">
                <label class="font-medium text-sm" for="">Password</label>
                <br>
                <input class="w-[400px] h-[48px] my-2 border border-black rounded-md" type="password" id="password">
                </div>
                <button  class="w-[400px] h-[48px] border bg-[#FF424E] text-white rounded-md" id="btn-signup">Đăng ký</button>
                <br>
                <a class="text-blue-500 hover:underline" href="/signin">Đăng nhập</a>
                </div>
            <div class="bg-gray-200 h-[506px] rounded-r-md">
                <img class="w-2/5 mx-auto my-[210px]" src="public/290707804_583841913337957_8588693790177220222_n.png" alt="">
            </div>
            </div>
        
        </div>
        `
    },
    afterRender: () => {
        const btnSignup = document.querySelector("#btn-signup")
        btnSignup?.addEventListener('click', function (e) {
            e.preventDefault()

            const email = document.querySelector("#email")?.value
            const phone = document.querySelector("#numberPhone")?.value
            const password = document.querySelector("#password")?.value
            const user: User = {
                email: email,
                phone: phone,
                password: password
            }
            console.log(user);

        })

    }
}
export default Signup

