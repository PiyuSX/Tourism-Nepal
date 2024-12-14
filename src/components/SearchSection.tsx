import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Destination } from '../types/destination';

interface SearchSectionProps {
  destinations: Destination[];
}

export function SearchSection({ destinations }: SearchSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = destinations.filter(dest =>
      dest.name.toLowerCase().includes(term.toLowerCase()) ||
      dest.location.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDestinations(filtered);
  };

  const handleSuggestionClick = (destination: Destination) => {
    setSearchTerm(destination.name);
    setFilteredDestinations([destination, ...destinations.filter(dest => dest.id !== destination.id)]);
    setIsSearchFocused(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            className="w-full px-6 py-4 bg-white/10 rounded-lg text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50" />
        </div>

        {isSearchFocused && searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 bg-white/10 rounded-lg overflow-hidden backdrop-blur-lg"
          >
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="p-4 hover:bg-white/20 cursor-pointer transition-colors"
                onClick={() => handleSuggestionClick(dest)}
              >
                <h3 className="text-white font-semibold">{dest.name}</h3>
                <p className="text-white/70 text-sm">{dest.location}</p>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
      >
        {filteredDestinations.map((dest) => (
          <motion.div
            key={dest.id}
            whileHover={{ y: -5 }}
            className="bg-white/5 rounded-lg overflow-hidden"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg">{dest.name}</h3>
              <p className="text-white/70 mt-1">{dest.description}</p>
              <p className="text-white/50 text-sm mt-2">{dest.location}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}