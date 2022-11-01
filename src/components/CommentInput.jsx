import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const CommentInput = () => {
  const {id} = useParams();
  const [textInput, setTextInput]= useState("");
  const {action, state} = useContext(DataContext);

  //버튼을 눌렀을때 코멘트 추가
  const addComment = () => {
    console.log("확인")
    // 새로운 코멘트 객체 생성
    const comment =  {
      commentId : state.commentCount, // 계속해서 증가해야하는 값
      productId : id, // 현재 id값을 가져오기 : param값 > 부모로부터 받아오기
      name : (state.user ? state.user.name : "익명" ), // user 를 통해서 받아옴. 단 user의 값이 null일 경우 빈값
      text : textInput // textInput를 넣어줌
    }
    // 새로운 코멘트 객체를 state의 allcomments에 연결
    action.setAllComments(state.allComments.concat(comment) )
    console.log(state.allComments)
    action.setCommentCount(state.commentCount+1);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col xs={10} >
            <FloatingLabel 
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here"
                onChange={(e)=>{setTextInput(e.target.value)}}
              />
            </FloatingLabel>
          </Col>
          <Col xs={2} className="d-grid gap-2">
            <Button variant="primary" onClick={addComment}>입력</Button>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default CommentInput;