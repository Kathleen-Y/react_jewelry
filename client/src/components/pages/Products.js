import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

import products from "../../data.json";

const Faq = () => {
  return (
    <div>
      {products.filter((product) => product.title.toLowerCase().includes(" ring")).map((product) => {
        return (<Card>
          <CardTitle>{product.title}</CardTitle>
          <CardImg top src={product.img_src} alt={product.title} />
        </Card>)
      })}
    </div>
  );
};

export default Faq;
