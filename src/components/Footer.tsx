import styled from 'styled-components'

export default function Footer() {
  return (
    <StyledFooter>
      <img src='/Shrimurti.png' alt='img' />
      <div className='links'>
        <a href='https://sri-ammabhagavan.org' target='_blank'>
          Sri Amma Bhagavan
        </a>
        <a href='https://www.youtube.com/@AmmaBhagavan' target='_blank'>
          Golden Age Dharma
        </a>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  margin: 10px 15px 30px;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  gap: 30px;
  border-top: 3px solid #dddddd;
  & img {
    width: 70px;
  }
  & .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    & a {
      color: #5b410f;
      text-decoration: underline;
      transition-duration: 150ms;
      &:hover {
        font-weight: bold;
      }
    }
  }
`
