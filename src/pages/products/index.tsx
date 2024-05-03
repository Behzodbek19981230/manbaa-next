import { useState } from "react";
type NEWTYPE = {
  name: "string";
  price: "number";
  image: "string";
  id: "number";
};
type NEWTYPE2 = {
  title: "string";
  body: string;
};
export default function ProductsAll() {
  const [data, setData] = useState<NEWTYPE & NEWTYPE2>();

  return (
    <div className="w-[1200px] m-auto">
      <h1>Products</h1>
      {data?.title}
    </div>
  );
}
