import axios from 'axios';

const PostItem = ({postProp}) => {
    const postClick = async (e) => {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`);
        const targetID = e.target.id
        console.log(targetID)
    }
    return(
        <h1 onClick = {postClick} id = {postProp.id}>TITLE: {postProp.title}</h1>
    )
}

export default PostItem