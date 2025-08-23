import { Link } from 'react-router-dom';
export default function Hero() {
  return (<>
    <div className="hero">
       
      <h1> Welcome To our PobalyKiosk</h1>
      
      <p>It is a trusted name in Kiosk. Our kiosk model is designed to offer
quick, accessible, and quality shopping experiences to customers in all areas,
all while minimizing overhead and maximizing profits for franchise owners</p>


<h2>What we do?</h2>
A kiosk franchise is a business model where a franchisee operates a compact, often self-service retail outlet under the brand of a larger, established company, providing products or services like food, beverages, or tech repair in high-traffic areas such as malls or transit hubs
<br/><br/>

<h3> Do you Want to join us?</h3>
<Link to="/signup" className='Signin'>SIGN UP</Link><br/>

<h3> Do you Have Account?</h3>
<Link to="/signin" className='Signin'>SIGN IN</Link><br/>
    </div>

    <div className="hero">


        <h2> Frequntly asked question</h2>
             <div className="hero1">
                <h3> Question 1</h3>
               Answer Our kiosk model is designed to offer quick, accessible, and quality shopping experiences to customers in all areas, all while minimizing overhead and maximizing profits for franchise owners
             </div>
              <div className="hero1">
                <h3> Question 2</h3>
                AnswerOur kiosk model is designed to offer quick, accessible, and quality shopping experiences to customers in all areas, all while minimizing overhead and maximizing profits for franchise owners
             </div>


              <div className="hero1">
                <h3> Question 3</h3>
                Answer Our kiosk model is designed to offer quick, accessible, and quality shopping experiences to customers in all areas, all while minimizing overhead and maximizing profits for franchise owners
             </div>


    </div>
    
    </>
  );
}