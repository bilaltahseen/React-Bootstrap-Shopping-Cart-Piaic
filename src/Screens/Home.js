import React from 'react';
import Card from '../Components/Card';
import { data } from '../Data';

const Home = () => {
  return (
    <div>
      <div className='container-fluid my-container'>
        <div className='row '>
          {data.map((elem) => {
            return (
              <div className='col-md-4 mt-3'>
                <Card
                  itemId={elem.itemId}
                  itemName={elem.itemName}
                  itemPrice={elem.itemPrice}
                  itemImage={elem.itemImage}
                  itemDetails={elem.itemDetails}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
