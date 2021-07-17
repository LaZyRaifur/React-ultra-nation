import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const {name,population,region,flag} = props.country;
    const countryStyle = {border: '1px solid red',margin: '40px'}
    const flagStyle = {height:'50px'
                        ,padding: '20px'}
    const handleAddCountry = props.handleAddCountry;
   
    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <p><small>{population}</small></p>
            <p>{region}</p>
            <img src={flag} alt="" style={flagStyle}/>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;