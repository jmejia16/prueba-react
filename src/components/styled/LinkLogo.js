import styled from 'styled-components';
 
const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

  const linkLogo = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  font-size: 13pt;
  color: #000000;
  padding: 10px 10px 10px 25px;

`;


export default linkLogo;