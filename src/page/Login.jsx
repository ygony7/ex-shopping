import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const Login = () => {
	const [name, setName] = useState("");
	const {action} = useContext(DataContext)
	const navigate = useNavigate()

	const loginUser = () => {
		action.setUser({name: name, profile : null, likelist : [] });
		navigate('/');
	}
  return (
    <Form className="m-5" onSubmit={loginUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>아이디</Form.Label>
        <Form.Control type="text" placeholder="아이디를 입력해주세요" 
					onChange={(e)=>{setName(e.target.value)}}
				 />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;