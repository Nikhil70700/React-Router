// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: integrate authentication logic
//     console.log('Signing in with', { email, password });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign In to MyApp</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
//           >
//             Sign In
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <Link to="/signup" className="text-green-500 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from 'react';

const SignIn = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

const handleFormSubmit=(e)=>{
    e.preventDefault();

    const loginData={
        username,
        password,
    };
console.log(loginData)

}

  return (
    <div className='container-form'>
        <div className="Card">
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' required autoComplete='off' value={username} onChange={(e)=>setUsername(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' required autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)} />

                <button className='btn-sign-in' type='submit'>Login </button>
            </form>
        </div>

    </div>
  )
}

export default SignIn
