import PostItem from './PostItem'

const Posts = ({postsProp}) => {
    return postsProp.map((post) => (
        <PostItem postProp = {post} key = {post.id}/>
    )) 
}

export default Posts