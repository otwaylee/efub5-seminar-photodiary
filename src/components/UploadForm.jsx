import styled from 'styled-components';
import { useRef, useState } from 'react';

const Form = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PreviewImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
`;

const StyledInput = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
`;

export default function UploadForm({ onUpload }) {
  const titleRef = useRef();
  const fileRef = useRef();
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    // TODO: 선택한 파일을 미리보기로 보여주는 코드를 작성해보세요
    //* 힌트: URL.createObjectURL(file)을 사용하면 브라우저에서 임시 미리보기 URL을 만들 수 있어요
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO 제목과 이미지가 담긴 FormData를 만들고, 상위 컴포넌트(App)의 onUpload 함수에 전달해주세요
    // *힌트: FormData에 .append()로 key-value 형식으로 데이터를 추가할 수 있어요
    // *그리고 onUpload(newPost)로 새로운 포스트 객체를 App에 넘겨줄 수 있어요 
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledInput
        ref={titleRef}
        type='text'
        placeholder='제목을 입력하세요'
        required
      />
      <StyledInput
        ref={fileRef}
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        required
      />
      {preview && <PreviewImage src={preview} alt='미리보기' />}
      <button type='submit'>업로드</button>
    </Form>
  );
}
