import styled from "styled-components";
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput} from './components/headerComponent';


export const Container =styled.div`
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
    </Container>
  );
}

export default App;
