const Registration =()=>{
return(
    <div className="h-screen bg-gradient-to-r from-left to-right flex justify-center items-center ">
      <div className="white p-4 w-25 rounded shadow-md">
        {/* <h2 className="text-2xl font-bold font-sans">Registration</h2> */}
        <span className="font-bold underline decoration-sky">Re</span><span className="font-bold">gistration</span>
        <form className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="text-1xl block text-white mb-2">
                Full name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter you name"
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="text-1xl block text-white mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter you username"
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-1xl block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter you email"
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="text-1xl block text-white mb-2">
                Phone number
              </label>
              <input
                type="tel"
                id="phonenumber"
                placeholder="Enter you number"
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-1xl block text-white mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-1xl block text-white mb-2">
               Confirm Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Confirm password"
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="gender" className="block text-white text-1xl mb-2">
                Gender
              </label>
              <div className="flex items-center justify-between">
                <input type="radio" id="male" name="gender" value="male" className="mr-2" />
                <label htmlFor="male" className="text-white">Male</label> &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <input type="radio" id="female" name="gender" value="female" className="mr-2" />
                <label htmlFor="female" className="text-white">Female</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <input type="radio" id="prefer not to say" name="gender" value="prefer not to say" className="mr-2" />
                <label htmlFor="female" className="text-white">Prefer not to say</label>

              </div>
            </div>
            <br />
            <div className="flex justify-center">
            <button type="submit" className="textwhite bg-gradient-to-r from-left to-right shadow-md w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
            </div>
            
          
        </form>
      </div>
    </div>
    // </div>
    
);
};
export default Registration;