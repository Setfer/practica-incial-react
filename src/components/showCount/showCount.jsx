

const ShowCount = (props) =>{
  console.log(props)
  return(
    <div>
      <h2 >Has hecho {props.count} {props.count=== 1 ? "vez": "veces"} click </h2>
    </div>
  )
}

export default ShowCount