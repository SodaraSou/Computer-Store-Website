import LoginImage from '../assets/LoginImage.jpg'
import FacebookLogo from '../assets/svg/facebook.svg'
import GoogleLogo from '../assets/svg/google.svg'
function Login() {
    return (
        <div className="w-full h-[750px] flex justify-center items-center">
            <div className="w-[900px] h-[600px] flex justify-center bg-[#D9D9D9] rounded-2xl">
                <img src={LoginImage} className="w-[400px]"/>

                <div className="w-[390px] flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-9">Login</h1>
                    {/*Email and Password Input*/}
                    <h2 className="text-xl font-bold mb-4">Email</h2>
                    <input type="email" placeholder="Enter an email" className="h-[50px] rounded-md mb-4"/>
                    <h2 className="text-xl font-bold mb-4">Password</h2>
                    <input type="password" placeholder="Enter a password" className="h-[50px] rounded-md mb-4"/>
                    {/*Forgot Password*/}
                    <div className="flex justify-between">
                        <p></p>
                        <p className="text-xl font-bold mb-4 cursor-pointer">Forgot Password ?</p>
                    </div>
                    {/*Sign in button*/}
                    <button className="bg-white h-[50px] rounded-md text-xl font-bold mb-4">Sign In</button>
                    {/*Line and Or*/}
                    <div className="relative flex items-center justify-center py-2">
                        <div className="h-[1px] bg-black flex-grow"></div>
                        <p className="absolute text-lg bg-[#D9D9D9] px-3">or sign in with</p>
                    </div>
                    {/*Icons*/}
                    <div className="flex justify-center mt-4">
                        <img src={FacebookLogo} alt="Facebook Logo" className="w-6 h-6 cursor-pointer mr-6"/>
                        <img src={GoogleLogo} alt="Google Logo" className="w-6 h-6 cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;