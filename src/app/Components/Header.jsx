import React from 'react'

const Header = () => {
      const data = ["Home", "About", "Contact", "Name", "Shop"];
  return (
    <>
      {/* navbar */}
      <div className="flex-1 relative justify-between p-5 ">
        <div className="flex justify-between">
          <h4>Logo</h4>
          <div className="flex gap-6  ">
            {/* navigation bar map  */}
            {data.map((item, index) => {
              return <h4 key={index}>{item}</h4>;
            })}
            {/* navigation bar map End  */}
          </div>
        </div>
      </div>
      {/* navbar */}
    </>
  );
}

export default Header