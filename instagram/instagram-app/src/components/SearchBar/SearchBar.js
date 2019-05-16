import React from 'react';
import IGLogo from '../assets/iglogo.png';
import './SearchsBar.css';

const SearchBar = props => {
  return (
    <div className="search-wrap">
      <div className="image-wrap">
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Find Friends" onKeyDown={props.searchPosts} />
      </div>
      <div className="social-wrap">
        <div className="social">
          <i className="compass" />
        </div>
        <div className="social">
          <i className="heart" />
        </div>
        <div className="social">
          <i className="circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;