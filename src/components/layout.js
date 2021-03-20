import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


import Header from './Header';
import OverLayMenu from './OverlayMenu'
import Hamburger from './Hamburger'
import Footer from './Footer'

import './layout.css'
import 'bootstrap/dist/css/bootstrap-grid.css'

const Primary = styled.main `
  padding: 110px 0 0 0;
`

const Layout = ({children}) => {

  const [menuOpen, useMenuOpen] = useState(false)

    return (
      <div>
        Layout
      </div>
    )


}

export default Layout