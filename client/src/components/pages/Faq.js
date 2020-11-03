import React from 'react';
import Layout from '../components/Layout';

const Faq = () => { 
    return ( 
        <Layout title="Faq" description="This is the Faq page" >
            <div className="text-center mt-5">
                <h1>Faq</h1>
                <p>ALL PRODUCTS ARE MADE BY HAND SO PLEASE ALLOW 4-6 WEEKS FOR CREATION + DELIVERY.
                ALL ACIDS COLLECTION STYLES ALSO COME IN NON ACIDS AS WELL IN PLAIN 14 KT PLATED GOLD, 
                ROSE GOLD PLATED, GUNMETAL PLATED, AND SILVER PLATED.
                PLEASE CONTACT MONA@MONAASSEMI.COM WITH YOUR ORDER NUMBER AND YOUR CHOICE OF METAL.
                JEWELRY, WILL BE THE CLOSEST VARIATION TO THE PIECES PICTURED WHEN SHIPPED. </p>
                <img src={'https://cdn.shopify.com/s/files/1/0755/2497/files/b_13.jpg?4037369015253632147'} alt="boo" className="img-responsive"/>
                <img src={'https://cdn.shopify.com/s/files/1/0755/2497/files/pro-08.jpg?351932033806436885'} alt="hoo" className="img-responsive"/>
        
            </div>
        </Layout>
     );
}
 
export default Faq;
