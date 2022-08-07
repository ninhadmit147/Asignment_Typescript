import validator from 'validator'
import { signup } from '../../api/auth'
const Signup = {
    render: () => {
        return /*html*/ `
        <div class="items-center ">
            <div class="grid grid-cols-3 w-[800px] h-[508px] mx-auto border rounded-md my-[200px]">
                <div class="col-span-2 my-[95px] mx-auto">
                <div class="">
                <label class="font-bold text-lg" for="email">Email</label>
                <br>
                <input class="w-[400px] h-[48px] my-2 border border-black rounded-md" type="email" name="email" id="email">
                <div id="error" class="text-red-500"></div>
                </div> 
                <div class="">
                <label class="font-medium text-sm" for="phone">Số điện thoại</label>
                <br>
                <input class="w-[400px] h-[48px] my-2 border border-black rounded-md" maxlength="10" type="number" name="phone" id="phone">
                <div id="error" class="text-red-500"></div>
                </div> 
                <div class="">
                <label class="font-medium text-sm" for="password">Password</label>
                <br>
                <input class="w-[400px] h-[48px] my-2 border border-black rounded-md" type="password" name="password" id="password">
                <div id="error" class="text-red-500"></div>
                </div>
                <button  class="w-[400px] h-[48px] border bg-[#FF424E] text-white rounded-md" id="btn-signup">Đăng ký</button>
                <br>
                <a class="text-blue-500 hover:underline" href="/signin">Đăng nhập</a>
                <a class="text-blue-500 hover:underline" href="/">Trang chủ</a>
                </div>
            <div class="bg-gray-200 h-[506px] rounded-r-md">
                <img class="w-2/5 mx-auto my-[210px]" src="public/290707804_583841913337957_8588693790177220222_n.png" alt="">
            </div>
            </div>
        
        </div>
        `
    },
    afterRender: async () => {
        const submit = document.querySelector("#btn-signup")
        const formField = [
            "email", "phone", "password"
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
            console.log(data);

            if (!error) {
                try {
                    const res = await signup(data)
                    if (res) {
                        alert("Đăng ký thành công")
                        location.href = "/signin"
                    }
                } catch (error) {
                    alert(error.message)
                }
            }
        }

    }
}
export default Signup

