import validator from "validator"
import { signin } from "../../api/auth"
const Signin = {
    render: () => {
        return `
        <div class="items-center ">
            <div class="grid grid-cols-3 w-[800px] h-[508px] mx-auto border rounded-md my-[200px]">
                <div class="col-span-2 my-[140px] mx-auto">
                <div class="">
                <label class="font-bold text-lg" for="email">Email</label>
                <br>
                <input class="w-[400px] h-[48px] my-2 border border-black rounded-md" type="email" name="email" id="email">
                <div id="error" class="text-red-500"></div>
                </div> 
                <div class="">
                <label class="font-medium text-sm" for="password">Password</label>
                <br>
                <input class="w-[400px] h-[48px] my-2 border border-black rounded-md" type="password" name="password" id="password">
                <div id="error" class="text-red-500"></div>
                </div>
                <button id="btn-signin" class="w-[400px] h-[48px] border bg-[#FF424E] text-white rounded-md">Đăng nhập</button>
                <br>
                <div class="justify-between mt-5 flex">
                    <a class="text-blue-500 hover:underline" href="/signup">Đăng ký ngay</a>
                    <a class="text-blue-500 hover:underline" href="/">Trang chủ</a>
                </div>
                
            </div>
            <div class="bg-gray-200 h-[505px] rounded-r-md">
                <img class="w-[185px] mx-auto my-[170px]" src="public/290707804_583841913337957_8588693790177220222_n.png" alt="">
            </div>
            </div>
        
        </div>
        `
    },
    afterRender: async () => {
        const submit = document.querySelector("#btn-signin")
        const formField = [
            "email", "password"
        ]
        const validate = function () {
            let data: any = {}
            let error = false
            const errors = document.querySelectorAll("#error")
            errors.forEach(e => {
                e.classList.add('hidden')
            })
            formField.forEach(field => {
                const element = document.getElementById(field)
                if (element?.value.length == 0) {
                    addError(element, "Bạn không được để trống")
                    error = true
                }
                if (field == "email") {
                    if (!validator.isEmail(element?.value)) {
                        addError(element, "Email không chính xác, hãy nhập lại")
                        error = true
                    }
                }
                data[field] = element?.value
            })
            return { error, data }
        }
        const addError = function (element: HTMLElement, message: string) {
            let temp = element.nextElementSibling;
            temp.classList.remove("hidden");
            temp.textContent = message;
        }
        submit.onclick = async function () {
            const { error, data } = validate()
            if (!error) {
                try {
                    const res = await signin(data)
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    console.log(res.data);


                    if (localStorage.getItem("user")) {
                        try {
                            if (res.data.user.role == 1) {
                                location.href = "/admin/products"
                            }
                            else {
                                location.href = "/"
                            }
                        } catch (error) {
                            alert("Đăng nhập thất bại")
                        }


                    }
                } catch (error) {
                    alert("Tài khoản hoặc mật khẩu không chính xác")
                }
            }
        }

    }
}
export default Signin

