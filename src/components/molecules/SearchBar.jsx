import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const SearchBar = ({ placeholder = "Search...", className = "" }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`flex gap-2 ${className}`}>
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <ApperIcon name="Search" size={20} className="text-gray-400" />
        </div>
      </div>
      <Button type="submit" variant="primary" size="md">
        <ApperIcon name="Search" size={16} />
      </Button>
    </form>
  );
};

export default SearchBar;