import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useEffect } from "react";

function NavbarComp() {
	//데이터
  const [login, setLogin] = useState(true);
	const data = useContext(DataContext);
	// 네비게이터
	const navigate = useNavigate();

	// 컴포넌트가 마운트 되자마자 로그인정보 확인
	useEffect(()=>{
		setLogin(data.state.user ? true : false )
	}, [data.state.user]) //새로 로그인을 했을때 화면이 바뀌게 설정

	// Logout을 위한 이벤트 함수
	const logOut = () => {
		setLogin(false) // 컴포넌트를 바꾸주기 위해 수정
		// userd의 값을 null로 바꿔줌
		data.action.setUser(null);
		// 다른곳에서 로그아웃을해도 항상 홈으로 돌아감
		navigate("/");
	}

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <FontAwesomeIcon icon={faShop} /> SHOP
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            {login ? (
              <Nav >
                {/**로그인이 되었을때 출력될 컴포넌트 */}
                <NavLink className="nav-link" to="/mypage">
                  {data.state.user.name}님의 MyPage
                </NavLink>
                <Button variant="outline-light" onClick={ logOut }>Logout</Button>{" "}
              </Nav>
            ) : (
              <div>
                {/** 로그인이 되지 않았을때 출력될 컴포넌트 */}
                <Button variant="outline-light" onClick={()=>{navigate('/loginform')}}>Login</Button>{" "}
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;