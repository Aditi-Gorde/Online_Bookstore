import React from 'react'
import Card from 'react-bootstrap/Card';

function PaginatedBook({book}) {
  return (
    <>
       <Card className="bg-dark text-white">
      <Card.Img src="https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-the-background-photography-of-the-empty-library-bookstore-indoors-image_785539.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </>
  )
}

export default PaginatedBook
