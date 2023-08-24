import Item from "./Item";

export default function Country(
    {children: country = null, 
        onCountryClick = null}) {
    if (!country) {
        return (
            <div>Impossivel redenderizar o país</div>
        )
    }
    function handleCountryClick() {
        onCountryClick(country.id);
    }
      
  
const { name, capital, region, currency, language,} = country;

    return (
        <>
        <div className="border p-2 m-2 
        flex-row items-center space -x-2 
        onClick{handleCountryClick}">
        <ul>
            <li>
                <Item label="Nome:">{name}</Item> 
            </li>
            
            <li>
                <Item label="Capital:">{capital}</Item> 
            </li>

            <li>                
                <Item label="Continente:">{region}</Item> 
            </li>

            <li>
                <Item label="Moeda:">{currency.code}</Item>
            </li>

            <li>
                <Item label="Idioma:">{language.name}</Item>
            </li>

        </ul>
        
        </div>
        </>
    )
}