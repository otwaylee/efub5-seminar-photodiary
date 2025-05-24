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
      {/* TODO: posts 배열을 순회하며 Post 항목을 렌더링해보세요 */}
      {/* 어떤 함수를 사용해볼까요? ___ 함수를 사용해서 각 post의 title과 imageUrl을 꺼내 렌더링하세요. */}
    </PostContainer>
  );
}
