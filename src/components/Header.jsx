

function Header(){
  return(
    <header className=" bg-blue-400 flex justify-between items-center p-5">
      <h1 className="text-white font-bold text-2xl">TaskM</h1>

      <nav>
        <ul className="flex gap-2 items-center text-white font-bold list-none">
          <li><a href="#">Home</a></li>
          <li><a href="#">Tasks</a></li>
          <li><a href="#">Status</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header