import { ListGroup } from "react-bootstrap";

const Comment = (props) => {
    const {comment} = props;
    return (  
        <ListGroup.Item>
            <h4>{comment.name}</h4>
            <p>{comment.text}</p>
        </ListGroup.Item>
    );
}
 
export default Comment;