import React from "react";
import styled from "styled-components";
import {useState} from 'react';
import Axios from "axios";

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';


import Headers from './components/headerComponent';

import Recipe from './components/recipeComponent';


const APP_ID="ab73337b";
const APP_KEY="4c02b1dd6a3495555b60763da165417d";


const PlaceHolder=styled.img`
  width:120px;
  height:120px;
  margin:auto auto auto auto;
  opacity:50%;
`;

const RecipeComponent =(props) => {
  const [show,setShow]= useState(false);
  const { recipeObj } =props;
  return(
    <>
    <Dialog open={show}>
      <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
      <DialogContent>
        <table>
          <thead>
            <th>Image</th>
            <th>Ingredients</th>
            <th>Weight</th>
          </thead>
          <tbody>
            {recipeObj.ingredients.map((ingredientObj)=>(
             <tr>
               <td>
                 <img src={ingredientObj.image} alt={ingredientObj.text} width="50" height="50"/>
               </td>
              <td>{ingredientObj.text}</td>
              <td>{ingredientObj.weight}</td>
             </tr>
            ))}
          </tbody>
        </table>

      </DialogContent>
      <DialogActions>
        <Recipe.IngredientsText onClick={() => window.open(recipeObj.url)}>SeeMore</Recipe.IngredientsText>
        <Recipe.SeeMoreText onClick={() => setShow(false)}>Close</Recipe.SeeMoreText>
      </DialogActions>
      </Dialog>
    <Recipe.RecipeContainer>
      <Recipe.CoverImage src={recipeObj.image}/>
      <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
      <Recipe.IngredientsText onClick={()=>setShow(true)}>
        Ingredients
      </Recipe.IngredientsText>
      <Recipe.SeeMoreText onClick={()=>window.open(recipeObj.url)}>
        See Complete Recipe
        </Recipe.SeeMoreText>
    </Recipe.RecipeContainer>
    </>
  )
}


function App() {
  const [timeoutId,updateTimeOutId]=useState();
  const [recipeList,updateRecipeList]=useState([]);

  const fetchRecipe= async (searchString) =>{
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      console.log(response);
      updateRecipeList(response.data.hits);

  };
  const onTextChange=(event) => {
    clearTimeout(timeoutId);
    const timeout=setTimeout(()=> fetchRecipe(event.target.value),500);
    updateTimeOutId(timeout);
  }


  return (
    <Headers.Container>
      <Headers.Header>
        <Headers.AppNameComponent><Headers.AppIcon src="chinese-food.svg" alt="icon" />Recipe Finder</Headers.AppNameComponent>
        <Headers.SearchComponent>
          <Headers.SearchIcon src="/icons8-search.svg" alt="Search"/>
          <Headers.SearchInput placeholder="Search Recipe" onChange={onTextChange}/>
        </Headers.SearchComponent>
      </Headers.Header>
      <Recipe.RecipeListContainer>
        {recipeList.length?
         recipeList.map((recipeObj) => (
           <RecipeComponent recipeObj={recipeObj.recipe} />
         )):<PlaceHolder src="chefs.svg" />}
      </Recipe.RecipeListContainer>
    </Headers.Container>
  );
}

export default App;
