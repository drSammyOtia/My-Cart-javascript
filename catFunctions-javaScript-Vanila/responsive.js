const product = [
    {
        id: 0,
        image: 'image/c1.jpg',
        title: 'Elianto Cooking Oil',
        price: '280',
    },
    {
        id: 1,
        image: 'image/c2.jpg',
        title: 'Elianto Cooking Oil',
        price: '500',
    },
    {
        id: 2,
        image: 'image/c3.jpg',
        title: 'Elianto Cooking Oil',
        price: '800',
    },
    {
        id: 3,
        image: 'image/c4.jpg',
        title: 'Elianto Cooking Oil',
        price: '1250',
    }
];
const categories = [...new Set(product.map((item) =>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    let {image, title, price} = item;
    return(
       <div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>'+
        "<button onClick='addtocat('+(i++)+')'>Add to cart</button>"+
        '</div>
       </div>'
    )
}).join('')