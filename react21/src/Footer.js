import { useStoreState } from "easy-peasy";

const Footer = () => {
    const postCount = useStoreState((state) => state.postCount);
    return (
        <footer className='Footer'>
            <p>{postCount} BlogPosts</p>
        </footer>
    )
}

export default Footer