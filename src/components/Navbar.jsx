import React from "react";
import styled from "styled-components";
import logo from "./img/logoshop.png";

function Navbar() {
  return (
    <>
      <NavContainer>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <p>ComicStore</p>
        </div>
        <div className="links">
          <a href="#">BUSCA</a>
          <a href="#" className="btn">
            Inicia sesión
          </a>
          <a href="#" className="btn btn-primary">
            Carrito
          </a>
        </div>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding-top: 10px;
  background-color: transparent;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 60px;
      padding: 0;
    }

    p {
      font-weight: 500;
      color: #f4f6f3;
      font-size: 2.4rem;
    }
  }

  .links {
    a {
      display: inline-block;
      font-weight: 400;
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      padding: 8px 24px;
      color: #f4f6f3;
    }

    .btn {
      margin: 0 20px;
      line-height: 21px;
      cursor: pointer;
      border-radius: 26px;
      border: 1px solid rgb(252, 100, 60);
    }

    .btn-primary {
    background-color: rgb(252, 100, 60);
    font-weight: 500;
    }
  }
`;
