import React from 'react'

const Card = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  function State() {
    handleClick
  }

  export default State;