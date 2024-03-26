import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([
    { month: 'Onboarding Call', data: ['a', 'c', 'd', 'e', 'e', 'r'] },
    { month: 'Google Search Console Access', data: ['ss', 'e22', '33', '22', '33', '333'] },
    { month: 'Google Analytics Access', data: ['', '', '', '', '', ''] },
    { month: 'Website Access', data: ['', '', '', '', '', ''] },
    { month: 'Technical Audit', data: ['', '', '', '', '', ''] },
    { month: 'Anchor Text and Semantic Analysis', data: ['', '', '', '', '', ''] },
    { month: 'Anchor Text/URL Mapping', data: ['', '', '', '', '', ''] },
    { month: 'Google Data Studio Report + Local Reporting Suit', data: ['', '', '', '', '', ''] },
    { month: 'Site Level Optimization', data: ['', '', '', '', '', ''] },
    { month: 'On Page Optimization', data: ['', '', '', '', '', ''] },
    { month: 'Content Creation', data: ['', '', '', '', '', ''] },
    { month: 'Content Publishing', data: ['', '', '', '', '', ''] },
    { month: 'Premium Press Release', data: ['', '', '', '', '', ''] },
    { month: 'Authority Niche Placements', data: ['', '', '', '', '', ''] },
    { month: 'Review Management', data: ['', '', '', '', '', ''] },
    { month: 'Index Links', data: ['', '', '', '', '', ''] },
    { month: 'Video Recap', data: ['', '', '', '', '', ''] },
  ]);

  const handleInputChange = (event, rowIndex, colIndex) => {
    const { value } = event.target;
    const updatedData = [...data];
    updatedData[rowIndex].data[colIndex] = value;
    setData(updatedData);
    postDataToAPI(updatedData);
  };

  const postDataToAPI = (postData) => {
    console.log("Posting data to API:", postData);
    // we can make the API call here!!
  };

  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
        <th style={{ borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black', borderBottom: 'none', padding: '8px', textAlign: 'left' }} colSpan="7">MONTH1</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.month}</td>
            {row.data.map((value, colIndex) => (
              <td key={colIndex} style={{ border: '1px solid black', padding: '8px' }}>
                <input
                  type="text"
                  value={value}
                  onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                  style={{ border: 'none', outline: 'none' }}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
