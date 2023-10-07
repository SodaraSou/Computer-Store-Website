import LoginImage from '../assets/LoginImage.jpg'
function Login() {
    return (
        <div className="w-full min-h-screen flex items-start">
            <div className="w-1/2 h-full flex flex-col">
                <img src={LoginImage} className="w-full h-full"/>
            </div>

            <div className="w-1/2 h-full bg-[#D9D9D9] flex flex-col p-20">
                <div className="w-full flex flex-col">
                    <h1 className="text-4xl font-bold mb-9">Login</h1>
                </div>
                <div className="w-full flex flex-col">
                    <h2 className="text-xl font-bold mb-4">Email</h2>
                    <input type="email" className="w-[390px] h-[50px] rounded-md mb-4"/>
                    <h2 className="text-xl font-bold mb-4">Password</h2>
                    <input type="password" className="w-[390px] h-[50px] rounded-md mb-4"/>
                    <div className="flex justify-between">
                        <p></p>
                        <p className="text-xl font-bold mb-4 cursor-pointer">Forgot Password ?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;