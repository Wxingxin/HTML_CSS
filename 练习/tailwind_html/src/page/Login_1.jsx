const Login_1 = () => {
  return (
    <div className="m-0 bg-gradient-to-tr from-purple-500 to-pink-500 h-48 w-96">
      <div className="w-1 p-20">
        <div className="bg-red-800">
          <h1>Welcome Come</h1>
          <form action="">
            <div>
              <label htmlFor="UserName">UserName</label>
              <input type="text" className="username" id="username" required />
            </div>
            {/* password */}
            <div>
              <label htmlFor="password">PassWord</label>
              <input type="password" className="" id="password" required />
            </div>
            {/* forget */}
            <button type="submit">Login</button>

            {/* buttom 组件 */}
            <div>
              <a href="#">Forget PassWord</a>
              <span>|</span>
              <a href="#">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login_1;
