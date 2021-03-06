import styled from "styled-components";


const Header= styled.div`
color: white;
background-color: #9bb1ae;
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555
`;

const AppNameComponent= styled.div`
display:flex;
align-items:center;
`;

const AppIcon=styled.img`
width:30%;
height:auto;
margin:15px;
`;

const SearchComponent=styled.div`
  display:flex;
  flex-direction: row;
  background-color:white;
  padding:10px;
  border-radius:50px;
  width:auto;
`;
const SearchIcon= styled.img`
width:32px;
height:auto;
`;

const SearchInput=styled.input`
 border:none;
 outline:none;
 width:auto;
 margin-left:15px;
 font-size:16px;
 font-weight:bold;
`;

const Container =styled.div`
display:flex;
flex-direction: column;
`;

const Headers={
  Header,
  Container,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput,
};
export default Headers;