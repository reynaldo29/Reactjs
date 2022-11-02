
const Header = () => {
    return (
        
    //   <header>
    //     <nav>
    //       <ul>
    //         <li>
    //           <a href="/">Home</a>
    //         </li>
    //         <li>
    //           <a href="/about">About</a>
    //         </li>
    //       </ul>
    
    //     </nav>
    //   </header>

    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/about">About</a>
      <a className="nav-item nav-link" href="#">Products</a>
      <a className="nav-item nav-link disabled" href="#">Company</a>
    </div>
  </div>
</nav>
    );
   }
   
export default Header;