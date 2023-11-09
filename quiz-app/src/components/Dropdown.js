import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const DropdownComponent = ({data,setDifficultyChange,difficultyChange}) => {
  const handleSelect = (selectedDifficulty) => {
    setDifficultyChange(selectedDifficulty);
  }
  return (
    <div>
    <DropdownButton
      id="dropdown-basic-button"
      title={difficultyChange || "Select Difficulty"}
      onSelect={handleSelect}
    >
      {data.map((difficulty) => (
        <Dropdown.Item key={difficulty} eventKey={difficulty}>
          {difficulty}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  </div>
  )
}
