import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Register = () => {
  return (
    <div>
      <div className="bg-[#E7E7E3] p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=" p-8 rounded-lg">
            <h3 className="mb-5">
              If you have already signed up then,{" "}
              <Link href={"/login"} className="underline">
                {" "}
                Sign In
              </Link>
            </h3>
            <h2 className="text-2xl font-bold text-[#232321]">Register</h2>
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
            <div className="text-center my-4">OR</div>
            <form className="space-y-4">
              <label className="font-bold text-2xl text-[#232321]">
                Your Name
              </label>
              <div>
                <input
                  type="text"
                  className="w-full bg-transparent px-4 py-2 border border-black rounded-md "
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full bg-transparent px-4 py-2 border border-black rounded-md "
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Gender</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="gender" className="mr-2" />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" className="mr-2" />
                    Female
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" className="mr-2" />
                    Other
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <label className="font-bold text-[#232321] text-2xl mb-5">
                  Login Details
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent px-4 py-2 border border-black rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="w-full bg-transparent px-4 py-2 border border-black rounded-md"
                  placeholder="Password"
                />
                <p className="text-xs text-gray-600 mt-2">
                  Minimum 8 characters with at least one uppercase, one
                  lowercase, one special character and a number.
                </p>
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" className="mr-2" id="condition-1" />
                <label className="text-sm" htmlFor="condition-1">
                  By clicking Log In you agree to our website KicksClub Terms &
                  Conditions, Kicks Privacy Notice and Terms & Conditions.
                </label>
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" className="mr-2" id="condition-2" />
                <label className="text-sm" htmlFor="condition-2">
                  Keep me logged in - applies to all log in options below.
                </label>
              </div>
              <button className="w-full bg-[#232321] text-white px-4 py-2 rounded-md mt-4">
                REGISTER
              </button>
            </form>
          </div>
          <div className="bg-white lg:max-h-[450px] p-8 rounded-2xl ">
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

export default Register;
