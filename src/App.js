import './App.css';
import { Board } from './Components/Board';
import styled from 'styled-components';
import { useContext } from 'react';
import {ThemeContext} from './ThemeContextProvider'

const Header = styled.div`
  width: 100%;
  height: 60px;
  background:  ${props => props.theme.appTheme.headerBackground} ;
  color: ${props => props.theme.appTheme.headerColor} ;
  padding: 5px 0;
  border-bottom: 1px solid rgba(0,0,0,.12);
  text-align: center;
  font-size: 40px;
  font-weight: 200;
  padding-bottom:10px;

`;
const Section = styled.div`
  position : absolute;
  right: 10px;
  top : 5px;
  & button{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin : 0 10px;
    outline:none;
    border:0;
    cursor: pointer;
    &:nth-child(1){
      background-color: green;
  }
    &:hover{
      transform: scale(1.25);
      transition-duration: 1s;
    }
    &:nth-child(2){
      background-color: black;
  }
    &:nth-child(3){
      background-color: white;
  }
  }
`;
function App() {
  const theme = useContext(ThemeContext)

  return (
    <div className="App">
      <Header theme={theme} className="header">
          mrello

          <Section>
              <button onClick={theme.setGreen}></button>
              <button onClick={theme.setDark}></button>
              <button onClick={theme.setLight}></button>
          </Section>
      </Header>
      <Board/>
      
    </div>
  );
}

export default App;
