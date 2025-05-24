import { useState } from 'react';
import UploadForm from './components/UploadForm';
import PostList from './components/PostList';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

function App() {
  const [posts, setPosts] = useState([]);

  const handleUpload = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <Container>
      <Title>📸 나만의 사진 일기장</Title>
      <UploadForm onUpload={handleUpload} />
      <PostList posts={posts} />
    </Container>
  );
}

export default App;
