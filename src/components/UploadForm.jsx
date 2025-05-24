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
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileRef.current.files[0];
    const title = titleRef.current.value;
    if (!file || !title) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', file);

    const newPost = {
      title,
      imageUrl: URL.createObjectURL(file),
    };

    onUpload(newPost);
    setPreview(null);
    e.target.reset();
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
