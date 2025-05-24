import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 100%;
`;

const Post = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

export default function PostList({ posts }) {
  return (
    <PostContainer>
      {posts.map((post, i) => (
        <Post key={i}>
          <h3>{post.title}</h3>
          <Image src={post.imageUrl} alt='업로드 이미지' />
        </Post>
      ))}
    </PostContainer>
  );
}
