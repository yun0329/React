import React, { useState, useEffect } from 'react';
import dummy from '.db/data.json';
import { useParams } from 'react-router-dom';
const Day = () => {
  const { day } = useParams();
  const [words, setWords] = useState([]);

  useEffect(() => {

    const filteredWords = dummy.words.filter(word => word.day === parseInt(day));
    setWords(filteredWords);
  }, [day]);

  return (
    <div className="Day">
      <h2>Day {day}</h2>
      <table>
        <thead>
          <tr>
            <th>영어</th>
            <th>한국어</th>
          </tr>
        </thead>
        <tbody>
          {words.map(word => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Day;
