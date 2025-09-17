// https://www.i18next.com
// https://react.i18next.com
import styled from "styled-components"

export default function Lang() {
  return (
    <Select>
      <option>
        Укр
      </option>
      <option>
        Eng
      </option>
    </Select>
  )
}

const Select = styled.select`
  position: absolute;
  top: 10px;
  right: 15px;
  height: 20px;
  color: #5b410f;
  border: 1px solid #dddddd;
  border-radius: 4px;
  opacity: 0.25;
  &:focus {
    opacity: 1;
  }
`