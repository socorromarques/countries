import Country from "./Country";

export default function Countries(
    {children: Countries = [], 
    onCountryClick = null,
}) {
    return (
        <div className="border p-2">
            <h2 className="text-center font-bold">{Countries.length} país(es)</h2>

            {Countries.map(country => {
                    return <Country onCountryClick={onCountryClick} key={country.id}>{country}</Country>
                    
                })
            }
        </div>

    )

}