import { pokeApi } from "../../services/pokeApi";
import axios, { AxiosPromise } from "axios";

interface abilityRequest {
  ability: {
    name: string,
    url: string,
  },
  is_hidden: boolean,
  slot: number
}

interface abilitiesResponse {
  name: string,
  description: string,
}

class ListAbilities {

  async list(name: string) {
    let abilitiesUrl: AxiosPromise[] = [];

    const { data } = await pokeApi.get(`pokemon/${name}`);
    const { abilities } = data;

    const pokeAbilities: abilitiesResponse[] = [];

    abilities.forEach((ability: abilityRequest) => {
      abilitiesUrl.push(axios(ability.ability.url))
    });

    const descriptions = await Promise.all(abilitiesUrl);

    descriptions.forEach((description, index) => {
      
      const abilityDescription = description.data.flavor_text_entries.find((item: { language: { name: string; }; }) => {

        return item.language.name === "en"
      
      });

      pokeAbilities.push({
        name: abilities[index].ability.name,
        description: abilityDescription.flavor_text
      });
    });

    pokeAbilities.sort((a, b) => {
      var NameA = a.name.toLowerCase();
      var NameB = b.name.toLowerCase();
      return (NameA < NameB) ? -1 : (NameA > NameB) ? 1 : 0;
  });

    return pokeAbilities;
  }
}

export { ListAbilities }