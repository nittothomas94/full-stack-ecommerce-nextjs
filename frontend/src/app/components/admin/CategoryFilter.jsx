import { useState } from 'react';
import Button from '../common/Button';

const CategoryFilter = ({ categories, onApply }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleDropdown = () => setOpen(!open);

  const handleCheckboxChange = category => {
    setSelected(prev =>
      prev.includes(category)
        ? prev.filter(item => item !== category)
        : [...prev, category]
    );
  };

  const handleApply = () => {
    onApply(selected); // Pass selected filters to parent
    setOpen(false);
  };

  const clearAll = () => {
    setSelected([]);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="bg-black text-white px-7 py-2 rounded-md flex items-center gap-2"
      >
        Category
        <span className="material-icons text-white">tune</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 bg-white border rounded-md shadow-lg p-2 w-40 z-10">
          <div className="max-h-40 overflow-y-scroll">
            {categories.map((cat, index) => (
              <label key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selected.includes(cat)}
                  onChange={() => handleCheckboxChange(cat)}
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between  gap-2">
            <Button
              onClick={handleApply}
              className="bg-yellow-400 w-70 rounded active:scale-95"
              text="Apply"
            />
            <Button
              onClick={clearAll}
              className="border border-black w-70 rounded active:scale-95"
              text="Clear all"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
