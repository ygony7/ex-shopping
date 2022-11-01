import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataContext from "../context/DataContext";
import ProfileUpdateModal from "../components/ProfileUpdateModal";

const Profile = () => {
	const {state} = useContext(DataContext);
  return (
    <div>
      <Container>
				<Row>
					<Col>
						{/** 프로필 사진과 사진을 수정할 모달창 */}
						{ state.user.profile ? 
						<div style={{
								width:"150px", 
								height :"150px", 
								backgroundImage: `url(${state.user.profile})`,
							 	backgroundSize:"cover" }
							}></div>
						: 
						<div style={{width:"150px", height :"150px", backgroundColor:"lightgray"}}> 이미지가 없습니다 </div>}
						<ProfileUpdateModal />
					</Col>
					<Col>
						{/** 이름과 찜목록을 출력*/}
						<h2>{state.user.name}</h2>
						<hr />
						<h2>찜 목록</h2>
						<ul>
							{ state.user.likelist.map((like)=>(<li>{like.productName}</li>))}
						</ul>
					</Col>
				</Row>
			</Container>
    </div>
  );
};

export default Profile;