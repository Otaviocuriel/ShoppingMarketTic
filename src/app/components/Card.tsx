const Card = () => {
    return (
        <div className="bg-white p-4 w-60 rounded-2xl shadow-md">
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
                        <button className="w-full bg-blue-500 py-2 px-4 hover:bg-blue-700 hover:!text-white">
							Adicionar ao carrinho
						</button>
        </div>
    )
};

export default Card;