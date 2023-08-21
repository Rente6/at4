import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const servico = [
  {
   titulo:"Adição",
   preco:"Quatro exercícios",
   texto:"Divertido e alegre!",
   img:"https://www.colegioweb.com.br/wp-content/uploads/2014/03/Soma-Adi%C3%A7%C3%A3o.jpg" 
  },
  {
    titulo:"Subtração",
    preco:"Quatro exercícios",
    texto:"Prático e rápido.",
    img:"https://static.preparaenem.com/2022/07/subtracao-unidades-pedir-emprestado-exemplo.jpg" 
   },
   {
    titulo:"Multiplicação",
    preco:"Três exercícios",
    texto:"Uma das operações mais usadas.",
    img:"https://2.bp.blogspot.com/-L3R0Ic8l3GE/TzCA__P4DoI/AAAAAAAAPFM/uIH_iyIFEww/s1600/TABUADA+COMPLETA+ATIV+MATEMATICA.jpg" 
   },
   {
    titulo:"Divisão",
    preco:"Três exercícios",
    texto:"Mais fácil do que parece.",
    img:"https://www.fabiobmed.com.br/site/wp-content/uploads/2012/03/elementos_divisao.gif" 
   }
]
function Cards() {
  return (
    <CardGroup>
      {servico.map(({titulo, preco, texto, img}) =>(
        <Card key={titulo}>
          <Card.Img variant='top' src={img}/>
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
              {texto}
            </Card.Text>
            <Card.Text>
              {preco}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
);
}

export default Cards;