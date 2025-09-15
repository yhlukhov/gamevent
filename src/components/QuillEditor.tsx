import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import styled from 'styled-components'

type Props = {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}

const modules = {
  toolbar: [
    [{ header: [3, 4, false] }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ]
}

export default function QuillEditor({ text, setText, placeholder }: Props) {
  return (
    <Quill
      modules={modules}
      value={text}
      placeholder={placeholder}
      onChange={setText}
    />
  )
}

const Quill = styled(ReactQuill)`
  margin-top: 10px;
  letter-spacing: 1px;
  line-height: 26px;
  color: #2e2e2e;
  border-radius: 12px;
  border: 2px solid #d2b37a;
  background-color: #fafafa;

  &:hover {
    border-color: #ead1a5;
  }

  & .ql-toolbar {
    border: none;
    border-bottom: 1px solid #d2b37a;
    & .ql-link {
      outline: 1px solid #d2b37a;
      border-radius: 5px;
      background-color: #fff6e7;
    }
  }

  & .ql-container {
    font: inherit;
    min-height: 55px;
    border: none;
    border-radius: 12px;
    background-color: #fafafa;

    & .ql-editor {
      &::before {
        font-style: normal;
      }
    }
    
  }
`