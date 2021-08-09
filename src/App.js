import styled from "styled-components";
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

const Container =styled.div`
display:flex;
flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent><AppIcon src="chinese-food.svg" alt="icon" />Recipe Finder</AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/icons8-search.svg" alt="Search"/>
          <SearchInput placeholder="Search Recipe"/>
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
