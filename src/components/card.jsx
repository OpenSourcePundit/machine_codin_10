import Card from 'react-bootstrap/Card';

export const TextCard=({prop}) =>{
  return (
    
    <Card style={{ width: '10rem' ,height:'10rem'  }}>
      <Card.Body>
        <Card.Title>{prop.qty}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{prop.name}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
//total stock..delivered...lowstockitem