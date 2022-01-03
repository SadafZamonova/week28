import style from './tariff.module.css'

function Tarifs(props) {
    const {item} = props;
const {card, card_title, card_item1, card_item2, card_item3} = style;

    return (
        <div className={card}>
         <div className={card_title}  >{ item.name }</div>
         <div className={card_item1} >{ item.price }</div>
         <div className={card_item2}>{ item.speed }</div>
         <div className={card_item3} >{ item.description }</div>
         </div>
    )
}
// function Tarifs(props) {
//     const {item} = props;
// let color = 'black'

// if (item.id === 0) {
//   color = '#87CEEB'
// } else if (item.id === 1 ) {
//     color = '#2E8B57'
// } else if (item.id === 2 ) {
//     color = '#FF0000'
// } else if (item.id === 3 ) {
//     color = '#000000'
// } 


// return (
//     <div className="card">
//      <div className="card_title" style={{backgroundColor: `${color}` }}>{ item.name }</div>
//      <div className="card_item1" style={{backgroundColor: `${color}` }} >{ item.price }</div>
//      <div className="card_item2">{ item.speed }</div>
//      <div className="card_item3" >{ item.description }</div>
//      </div>
// )
// }


export default Tarifs;
