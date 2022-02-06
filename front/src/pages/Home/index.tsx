import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

import { 
  Container, 
  Input, 
  Content, 
  Button,
  SearchGroup,
  ListAbilities,
  Abilities
} from './styles';

interface Request {
  name: string,
  description: string,
}

const Home: React.FC = () => {

  const [search, setSearch] = useState('');
  const [abilities, setAbilities] = useState([])

  async function searchAbilities(name: string) {
    const abilityData = await api.post("/", {name});
    setAbilities(abilityData.data);
  }

  return (
    <Container>
      <Content>
        <h1>Pokemon Abilities</h1>
        <SearchGroup>
          <Input 
            placeholder='Informe o nome do pokemon'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button
            type='button'
            onClick={() => searchAbilities(search)}
          >
            <text>Pesquisar</text>
          </Button>
        </SearchGroup>
        <ListAbilities>
          {abilities.map((ability: Request) => {
            return (
              <Abilities>
                <div>
                  <strong>Name: </strong>
                  <text>{ability.name}</text>
                </div>
                <div>
                  <strong>Description: </strong>
                  <text>{ability.description}</text>
                </div>
              </Abilities>
            )
          })}
          
        </ListAbilities>
      </Content>
    </Container>
  );
}

export {Home};