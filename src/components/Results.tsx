import React  from 'react';

interface Iprops{
  data : Array<any>,
  error : Boolean,
  st : Boolean
}
class Results extends React.Component<Iprops> {
  constructor(props:Iprops) {
    super(props)
  }

render(){
  if (!this.props.data.length) {
    return <div>No Data</div>
  }
  return(
    <div>
      <kbd>{this.props.st?" loading results .... ":"Results : "+this.props.data.length} </kbd>
      {this.props.data.map((c,i) =>(
             <div  className="m-1 p-3 shadow shadow-sm rounded " key={`c_${i}`}>
               <h6>{c.name.common}</h6>
               <span>official : {c.name.official}</span><br/>
               <span>capital : {c.capital}</span><br/>
               <span>region : {c.region}</span>
             </div>
           ))}
    </div>
  )
}




   
}

export default Results;