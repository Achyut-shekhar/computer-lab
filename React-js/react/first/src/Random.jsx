function Random(){
  let number=Math.random()*100;
  return <h1 style={{'background-color':'red','borderRadius':'10px'}}>random number is: {Math.round(number)}</h1>
}

export default Random;