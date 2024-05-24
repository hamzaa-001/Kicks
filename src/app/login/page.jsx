import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div className="bg-[#E7E7E3] p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=" p-8 rounded-lg ">
            <h2 className="text-2xl font-bold text-[#232321]">Login</h2>
            <a href="#" className="text-sm underline">
              Forgot your password?
            </a>
            <form className="mt-4">
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full bg-transparent px-4 py-2 border border-black rounded-md "
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="w-full bg-transparent px-4 py-2 border border-black
                   rounded-md "
                  placeholder="Password"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="checkbox" className="mr-2" />
                <label className="text-sm" htmlFor="checkbox">
                  Keep me logged in - applies to all log in options below.
                  <a href="#" className="underline">
                    More info
                  </a>
                </label>
              </div>
              <button className="w-full bg-[#232321] text-white px-4 py-2 rounded-md">
                EMAIL LOGIN
              </button>
              <div className="mt-4 flex justify-between gap-5">
                <button className="w-1/3 bg-white border px-4 py-2 rounded-md flex items-center justify-center">
                  <FaGoogle className="mr-2" /> Google
                </button>
                <button className="w-1/3 bg-white border px-4 py-2 rounded-md flex items-center justify-center">
                  <FaApple className="mr-2" /> Apple
                </button>
                <button className="w-1/3 bg-white border px-4 py-2 rounded-md flex items-center justify-center">
                  <FaFacebookF className="mr-2" /> Facebook
                </button>
              </div>
            </form>
            <p className="mt-4 text-xs text-gray-600">
              By clicking Log In you agree to our website KicksClub Terms &
              Conditions, Kicks Privacy Notice and Terms & Conditions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-[#232321]">
              Join Kicks Club Get Rewarded Today.
            </h2>
            <p className="mt-4">
              As kicks club member you get rewarded with what you love for doing
              what you love. Sign up today and receive immediate access to these
              Level 1 benefits:
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Free shipping</li>
              <li>A 15% off voucher for your next purchase</li>
              <li>Access to Members Only products and sales</li>
              <li>Access to adidas Running and Training apps</li>
              <li>Special offers and promotions</li>
            </ul>
            <p className="mt-4">
              Join now to start earning points, reach new levels and unlock more
              rewards and benefits from adiClub.
            </p>
            <button className="mt-4 w-full bg-[#232321] text-white px-4 py-2 rounded-md">
              JOIN THE CLUB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
