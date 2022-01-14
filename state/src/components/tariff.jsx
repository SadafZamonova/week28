import './tariff.css'


function Tarifs(props) {
    const {item, selected, onClick} = props;
let color = 'black'

if (item.id === 'zero') {
  color = '#87CEEB'
} else if (item.id === 'one' ) {
    color = '#2E8B57'
} else if (item.id === 'two' ) {
    color = '#FF0000'
} else if (item.id === 'three' ) {
    color = '#000000'
} 


return (
    <div  style={{transform: selected ? 'scale(1.1)' : 'scale(1.0)'}} className="card " onClick={onClick}>
     <div className="card_title" style={{backgroundColor: `${color}` }}>{ item.name }</div>
     <div className="card_item1" style={{backgroundColor: `${color}` }} >{ item.price }</div>
     <div className="card_item2">{ item.speed }</div>
     <div className="card_item3" >{ item.description }</div>
     </div>
)
}


// function Tarifs( props ) {
//     const { item } = props;
// const { card, card_title, card_item1, card_item2, card_item3 } = style;

//     return (
//         <div className={ card }>
//          <div className={ card_title }> { item.name } </div>
//          <div className={ card_item1 }> { item.price } </div>
//          <div className={ card_item2 }> { item.speed } </div>
//          <div className={ card_item3 }> { item.description } </div>
//          </div>
//     )
// }

export default Tarifs;
