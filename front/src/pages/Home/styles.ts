import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 30px;
  width: 200px;
  border-radius: 8px;
  border: solid 1px #bbb;
  padding: 0px 10px;

  &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  padding: 5px 30px;
  border: 0;
  border-radius: 8px;
  transition: .3s;
  margin-left: 10px;
  
  &:hover {
    cursor: pointer;
  }

  > text {
    font-size: 16px;
    color: #000;
    font-weight: 500;
  }
`;

export const ListAbilities = styled.ul`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  margin: 10px 0;
  padding: 0;
  width: 100%;
`;

export const Abilities = styled.li`
  display: flex;
  width: 100%;
  margin-top: 10px;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  border: solid 2px #bbb;

  > strong {
    font-weight: bold;
  }

`;
