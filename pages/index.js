import {useState, useEffect} from 'react';

function Home(){
  const [resultado, setAge] = useState(0);

  const changeAge = () => {
    setAge(prompt("Digite o seu Nome:")+", desejo a você uma vida com  muito sucesso e saúde!");
  }

  useEffect(changeAge, []);

  return (
    <div style={{backgroundColor: "#000000",position:"absolute", left:"0px",top:"0px", width:"100%",height:"100%",color:"#fff",fontFamily:"sans-serif"}}>
    <div className="app">
      <h1 style={{textAlign: "center"}}>{resultado}</h1>
      <center><button style={{fontFamily:"sans-serif",fontSize:"20px"}}  onClick={changeAge}>Mudar Nome</button></center><br></br>
      <div style={{textAlign: "center",fontFamily:"sans-serif",fontSize:"20px"}}>Projeto Epilif - <a target='_blank'  style={{fontFamily:"sans-serif",fontSize:"20px", color:"#fff"}} href='http://curso.dev'>curso.dev</a></div>
    </div>
    </div>
  )
}

export default Home;