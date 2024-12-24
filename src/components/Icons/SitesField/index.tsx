import styled from "styled-components";

const IconCircle = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #141C3A;
  border-radius: 50%;
  margin: 0 10px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #141C3A;
  }

  i {
    color: #141C3A;
    font-size: 24px;
    transition: color 0.3s ease;
  }

  &:hover i {
    color: #fff;
  }
`;

export default function SitesField() {
  return (
    <div>
      <IconCircle href="https://www.linkedin.com/in/gabriel-estefanski/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin"></i>
      </IconCircle>
      <IconCircle href="https://github.com/GabrielEstefanski" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github"></i>
      </IconCircle>
      <IconCircle href="https://api.whatsapp.com/send?phone=5512978113054" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-phone"></i>
      </IconCircle>
      <IconCircle href="mailto:gbraga2004@outlook.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-envelope"></i>
      </IconCircle>
    </div>
  );
}
