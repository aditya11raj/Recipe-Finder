import styled from "styled-components";

const RecipeListContainer=styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
padding: 30px;
justify-component: space-evenly;
gap:20px;
`;

const RecipeContainer=styled.div`
display:flex;
flex-direction:column;
padding:30px;
width:300px;
box-shadow:0 3px 10px 0 #aaa;
`;

const CoverImage=styled.img`
height:200px;
object-fit:cover;
`;

const RecipeName=styled.span`
font-size:18px;
font-weight:bold;
color:black;
margin:10px 0;
`;

const IngredientsText=styled.span`
font-size:18px;
border:solid 1px green;
color:black;
margin:10px 0;
cursor:pointer;
padding: 10px 15px;
border-radius: 4px;
color: green;
text-align:center;
margin-bottom: 12px;
`;

const SeeMoreText=styled(IngredientsText)`
color: #eb3300;
border: solid 1px #eb3300;
`;


const Recipe={
    RecipeListContainer,
    RecipeContainer,
    CoverImage,
    RecipeName,
    IngredientsText,
    SeeMoreText,
  };

  export default Recipe;