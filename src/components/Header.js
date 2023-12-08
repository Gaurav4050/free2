import React from "react";

function Heading() {
  return (
    <div>
      <div className="nav-wrapper white blue-text text-darken-2">
        <nav>
          <div className="white blue-text text-darken-2 nav-wrapper ">
            <a
              href="#!"
              className="white blue-text text-darken-2 brand-logo logo left"
            >
              <i className="material-icons">description</i>
              <span className="hero-text">Keep</span>
            </a>

            

            <ul className="white blue-text text-darken-2 right ">
              <li>
                <a className="blue-text text-darken-2" href="/">
                  Refresh
                </a>
              </li>
              <li>
                <a href="https://github.com/Vinodnkr/keepClone" target='blank' className="blue-text text-darken-2">
                  Code
                </a>
              </li>
              <li><a className="blue-text text-darken-2"  href='/home'>
            Logout</a></li>
            </ul>

            
            
          </div>
        </nav>
        
      </div>
    </div>
  );
}

export default Heading;
