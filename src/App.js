import React from 'react';
import './App.css';
import styled from "@emotion/styled";

const WhiteP = styled.h1`
  color: white;
`;

const StyledBackground1 = styled.div`
  background-color: #323633;
  border-radius: 10px;
  box-shadow: 0 0 50px 5px #0ff;
  margin: 5% 8%;
  padding: 0.5%;
  text-align: center;
`;

const StyledBackground2 = styled.div`
  background-color: #323633;
  border-radius: 10px;
  box-shadow: 0 0 50px 1px #0ff;
  margin: 5% 12%;
  padding: 0.5%;
  text-align: center;
  height: 500px;
`;

function App() {
    return (
        <body>
          <StyledBackground1>
              <WhiteP><strong>TO DO LIST</strong></WhiteP>
          </StyledBackground1>
          <StyledBackground2>
          </StyledBackground2>
        </body>
    );
}

export default App;
