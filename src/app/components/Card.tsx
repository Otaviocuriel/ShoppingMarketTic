const Card = () => {
    return (
        <div className="bg-white p-2 w-60 rounded-2xl shadow-md">
            <div>
                <img src="/assets/produtos/tenis.jpg">
                
                </img>
            </div>
            <div className="p-4">
                <div className="flex justify-center items-center mb-2">
                   <h3>Name Product</h3> 
                </div>
                <div className="flex justify-center items-center">
                    <span>Valor do Produto</span>
                </div>
              
            </div>
        </div>
    )
};

export default Card;