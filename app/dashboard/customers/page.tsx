import Image from 'next/image';
export default async function Page() {
  const response = await fetch('https://dummyjson.com/products/1');
  const data = await response.json();
  console.log(data);
  return (
    <div>
      <Image src={data.images[0]} alt={data.title} width={500} height={400} />
      <h1 className="mt-4 text-xl font-bold">{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

// {
//   id: 1,
//   title: 'iPhone 9',
//   description: 'An apple mobile which is nothing like apple',
//   price: 549,
//   discountPercentage: 12.96,
//   rating: 4.69,
//   stock: 94,
//   brand: 'Apple',
//   category: 'smartphones',
//   thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//   images: [
//     'https://i.dummyjson.com/data/products/1/1.jpg',
//     'https://i.dummyjson.com/data/products/1/2.jpg',
//     'https://i.dummyjson.com/data/products/1/3.jpg',
//     'https://i.dummyjson.com/data/products/1/4.jpg',
//     'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
//   ]
// }
