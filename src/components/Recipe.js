import React from 'react'

const Recipe = ({title,cuisine,dishType,totalTime,calories,image,ingredients}) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 ">
        <div className="card text-justify pl-5 pr-5 pt-3 pb-3 shadow  rounded" style={{width:'650px',height:'800px',marginBottom:'60px'}}>
            <h1 className="title text-center mb-3" style={{fontSize:'30px'}}>{title}</h1>
            <div className="row mt-2">
            <div className="col"><img src={image} className="rounded-circle mx-auto" alt="" style={{height:'auto',width:'250px'}}/></div>
            <div className="col p-4">
            <p className="font-weight-bold ">{cuisine?`Cuisine : ${cuisine}`:null}</p>
            <p className="font-weight-bold">{dishType?`Dish Type : ${dishType}`:null}</p>
            <p className="font-weight-bold">{totalTime?`Total Time to Cook : ${totalTime} min`:null}</p>
            <p className="font-weight-bold">{calories?`Calories : ${calories.toFixed(4)}`:null}</p>
            </div>
            </div>
            <p className="font-weight-bold mt-3">Steps to be followed : </p>
            <ul className="mr-2">
                {
                    ingredients.map((ingredient,id)=>(
                        <li key={id}>{ingredient.text}</li>
                    ))
                }
            </ul>
        </div>
        </div>
    )
}

export default Recipe
