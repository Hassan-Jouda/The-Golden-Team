import Card from 'react-bootstrap/Card';
import "../style/Featured.css";



const Featured = () => {
  return (
    <div className="featured">

     <Card style={{ width: '23rem', height:'20rem' }} className="card" >
      <Card.Body>
      <div className='img_dis'>
      <div style={{display:'block'}} >
        <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536998.png?token=exp=1656422396~hmac=bc1403bf41bd1f29697d0982d4dcdc6d" alt="" className='img'/>
      </div>
      <h1 className="c_name" >Verified</h1>

        <Card.Subtitle className="mb-2 text-muted" id='num' >01</Card.Subtitle>

        </div>
        <Card.Text className='text' >Some quick example text to build on the card title and make up the bulk of the card's</Card.Text>

      </Card.Body>
    </Card>    

  
    <Card style={{ width: '23rem', height:'20rem' }} className="card" >
      <Card.Body>
      <div className='img_dis'>
      <div style={{display:'block'}} >
        <img src="https://cdn-icons-png.flaticon.com/512/176/176072.png" alt="" className='img'/>
      </div>
      <h1 className="c_name" >Guarantee</h1>

        <Card.Subtitle className="mb-2 text-muted" id='num' >02</Card.Subtitle>

        </div>
        <Card.Text className='text' >Some quick example text to build on the card title and make up the bulk of the card's</Card.Text>

      </Card.Body>
    </Card>   


 
    <Card style={{ width: '23rem', height:'20rem' }} className="card" >
      <Card.Body>
      <div className='img_dis'>
      <div style={{display:'block'}} >
        <img src="https://cdn-icons.flaticon.com/png/512/1204/premium/1204101.png?token=exp=1656441816~hmac=792a9a4404d66b6967858ab1c41d6420" alt="" className='img'/>
      </div>
      <h1 className="c_name" >Experience</h1>

        <Card.Subtitle className="mb-2 text-muted" id='num' >03</Card.Subtitle>

        </div>
        <Card.Text className='text' >Some quick example text to build on the card title and make up the bulk of the card's</Card.Text>
      </Card.Body>
    </Card>   

    </div>
  );
};

export default Featured;
