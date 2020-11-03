import React from 'react';
import Layout from '../components/Layout';

const Home = () => { 
    return ( 
        <Layout title="Home" description="This is the Home page" >
            <div className="text-center mt-5">
                <h1>Custom to bring out your unique beauty</h1>
                <p>ALL PRODUCTS ARE MADE BY HAND SO PLEASE ALLOW <em> 4-6 WEEKS </em> FOR CREATION + DELIVERY. ALL ACIDS COLLECTION
                STYLES ALSO COME IN NON ACIDS AS WELL IN PLAIN 14 KT PLATED GOLD, ROSE GOLD PLATED, GUNMETAL PLATED, AND SILVER PLATED.
                <em> PLEASE CONTACT MONA@MONAASSEMI.COM WITH YOUR ORDER NUMBER AND YOUR CHOICE OF METAL. </em> JEWELRY, WILL BE THE 
                CLOSEST VARIATION TO THE PIECES PICTURED WHEN SHIPPED. </p>
                <img src={'//cdn.shopify.com/s/files/1/0755/2497/t/3/assets/slide-1-image.jpg?v=4443609049292117795'} alt="Card image cap" className="img-responsive"/>
                <img src={'https://cdn.shopify.com/s/files/1/0755/2497/files/pro-08.jpg?351932033806436885'} alt="Card image cap" className="img-responsive"/>
                <img src={'https://cdn.shopify.com/s/files/1/0755/2497/files/b_13.jpg?4037369015253632147'} alt="Card image cap" className="img-responsive"/>
                <img src={'https://cdn.shopify.com/s/files/1/0755/2497/files/1152.jpg?8870773803078067130'} alt="Card image cap" className="img-responsive"/>
            </div>
        </Layout>
     );
}
 
export default Home;
