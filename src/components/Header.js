import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons'


class Header extends Component {

  render() {
    return (
      <div className="flex justify-between place-items-center bg-sky-100 border-2 h-12 border-b-sky-200">
        <div className="pl-3 text-3xl">Create CV</div>
        <FontAwesomeIcon icon={faIdCard} className="h-6 pr-3" />
      </div>
    );
  }
}

export default Header;