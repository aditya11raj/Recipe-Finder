import styled from "styled-components";
import {useState} from 'react';
import Axios from "axios";
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput} from './components/headerComponent';

import {
  RecipeContainer,
  RecipeListContainer,
  RecipeName,
  CoverImage,
  IngredientsText,
  SeeMoreText} from './components/recipeComponent';
import React from "react";

const Container =styled.div`
display:flex;
flex-direction: column;
`;

const APP_ID="ab73337b";
const APP_KEY="4c02b1dd6a3495555b60763da165417d";

function App() {
  const [timeoutId,updateTimeOutId]=useState();

  const fetchRecipe= async (searchString) =>{
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      console.log(response);

  };
  const onTextChange=(event) => {
    clearTimeout(timeoutId);
    const timeout=setTimeout(()=> fetchRecipe(event.target.value),500);
    updateTimeOutId(timeout);
  }


  return (
    <Container>
      <Header>
        <AppNameComponent><AppIcon src="chinese-food.svg" alt="icon" />Recipe Finder</AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/icons8-search.svg" alt="Search"/>
          <SearchInput placeholder="Search Recipe" onChange={onTextChange}/>
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        <RecipeContainer>
          <CoverImage src="chinese-food.svg"/>
          <RecipeName>Matar Paneer</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
      </RecipeListContainer>
    </Container>
  );
}

export default App;
