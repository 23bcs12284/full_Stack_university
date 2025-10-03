function ProductCard(props) {
  if(!props.instock || props.instock<=0){
    return(
      <>
        <div className=" border-2 border-black m-5 p-5 ">
          <p className="text-3xl font-bold underline">{props.pname}</p>
          <p className="text-xl">{props.price}</p>
          <p className="text-md">{props.description}</p>
          <p className="text-red-600 font-bold">Out of Stock</p>
        </div>
      </>
    )
  }
  return (
    <>
      <div className=" border-2 border-black m-5 p-5">
        <p className="text-3xl font-bold underline">{props.pname}</p>
        <p className="text-xl">{props.price}</p>
        <p className="text-md">{props.description}</p>
        <p>{props.instock}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
      </div>
    </>
  );
}
export default ProductCard;
