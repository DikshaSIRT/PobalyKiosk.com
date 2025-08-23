import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PIOSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pincode, setPincode] = useState("");
  const [department, setDepartment] = useState("");
  const [state, setState] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Comprehensive PIO data
  const pioData = [
    { 
      id: 1, 
      name: "Rajesh Sharma", 
      designation: "Public Information Officer",
      department: "Municipal Corporation", 
      state: "Delhi",
      pincode: "110001", 
      email: "pio.mc@delhi.gov.in",
      phone: "+91-11-23456789",
      address: "Town Hall, Connaught Place, New Delhi",
      jurisdiction: "Central Delhi",
      workingHours: "9:00 AM - 5:00 PM",
      category: "Municipal Services"
    },
    { 
      id: 2, 
      name: "Anita Verma", 
      designation: "Senior PIO",
      department: "Electricity Board", 
      state: "Delhi",
      pincode: "110002", 
      email: "pio.elec@delhi.gov.in",
      phone: "+91-11-23456790",
      address: "BSES Office, Karol Bagh, New Delhi",
      jurisdiction: "North Delhi",
      workingHours: "8:00 AM - 6:00 PM",
      category: "Utilities"
    },
    { 
      id: 3, 
      name: "Suresh Patil", 
      designation: "Public Information Officer",
      department: "Water Supply", 
      state: "Maharashtra",
      pincode: "400001", 
      email: "pio.water@mumbai.gov.in",
      phone: "+91-22-23456789",
      address: "MCGM Building, Fort, Mumbai",
      jurisdiction: "South Mumbai",
      workingHours: "9:00 AM - 5:00 PM",
      category: "Water & Sanitation"
    },
    { 
      id: 4, 
      name: "Deepak Kumar", 
      designation: "Deputy PIO",
      department: "Transport Department", 
      state: "Karnataka",
      pincode: "560001", 
      email: "pio.transport@blore.gov.in",
      phone: "+91-80-23456789",
      address: "Transport Bhavan, Bangalore",
      jurisdiction: "Central Bangalore",
      workingHours: "8:30 AM - 5:30 PM",
      category: "Transportation"
    },
    { 
      id: 5, 
      name: "Priya Singh", 
      designation: "Public Information Officer",
      department: "Education Department", 
      state: "Delhi",
      pincode: "110003", 
      email: "pio.education@delhi.gov.in",
      phone: "+91-11-23456791",
      address: "Education Directorate, ITO, New Delhi",
      jurisdiction: "East Delhi",
      workingHours: "9:00 AM - 5:00 PM",
      category: "Education"
    },
    { 
      id: 6, 
      name: "Ramesh Gupta", 
      designation: "Senior PIO",
      department: "Health Department", 
      state: "Maharashtra",
      pincode: "400002", 
      email: "pio.health@mumbai.gov.in",
      phone: "+91-22-23456790",
      address: "Health Directorate, CST, Mumbai",
      jurisdiction: "Central Mumbai",
      workingHours: "8:00 AM - 6:00 PM",
      category: "Healthcare"
    }
  ];

  const departments = [...new Set(pioData.map(pio => pio.department))];
  const states = [...new Set(pioData.map(pio => pio.state))];

  const handleSearch = () => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      let filtered = pioData;

      if (searchTerm) {
        filtered = filtered.filter(pio => 
          pio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pio.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pio.designation.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (pincode) {
        filtered = filtered.filter(pio => pio.pincode === pincode);
      }

      if (department) {
        filtered = filtered.filter(pio => pio.department === department);
      }

      if (state) {
        filtered = filtered.filter(pio => pio.state === state);
      }

      setResults(filtered);
      setIsLoading(false);
    }, 500);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setPincode("");
    setDepartment("");
    setState("");
    setResults([]);
  };

  const showAllPios = () => {
    setResults(pioData);
    setShowAll(true);
  };

  useEffect(() => {
    // Show all PIOs on component mount
    setResults(pioData);
  }, []);

     return (
     <div className="min-h-screen bg-gray-50 py-8">
       <div className="w-[70%] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🔍 Search Public Information Officers (PIOs)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find and connect with Public Information Officers across different departments, 
            states, and jurisdictions. Get information about government services and file RTI applications.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 lg:grid-cols-4 gap-8 mb-4">
            <input
              type="text"
              placeholder="Search by name, department, or designation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginBottom: "10px", width: "100%" }}
              className="px-3 py-2 border border-gray-300 rounded-lg mt-10 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm my-2"
            />
            <input
              type="text"
              placeholder="Enter 6-digit Pincode"
              maxLength="6"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              style={{ marginBottom: "10px", width: "100%" }}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm my-2"
            />
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              style={{ marginBottom: "10px", width: "100%" }}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm my-2"
            >
              <option value="">Select Department</option>
              
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="px-3 py-2 mb-10border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm my-2"
            >
              <option value="">Select State</option>
              {states.map(stateName => (
                <option key={stateName} value={stateName}>{stateName}</option>
              ))}
              
            </select>
          </div>

                     <div className="flex flex-wrap justify-between">
            <button 
              onClick={handleSearch}
              disabled={isLoading}
              
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 disabled:opacity-50"
            >
              {isLoading ? "Searching..." : "🔍 Search PIOs"}
              
            </button>
            <button 
              onClick={showAllPios}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              📋 Show All PIOs
            </button>
            <button 
              onClick={clearFilters}
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              🗑️ Clear Filters
            </button>
            
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              {showAll ? "All Public Information Officers" : "Search Results"}
            </h2>
            <p className="text-gray-600">
              {results.length} PIO{results.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {results.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PIO Details</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department & State</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Information</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location & Hours</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {results.map((pio) => (
                    <tr key={pio.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{pio.name}</div>
                          <div className="text-sm text-gray-500">{pio.designation}</div>
                          <div className="text-xs text-gray-400">ID: {pio.id}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{pio.department}</div>
                          <div className="text-sm text-gray-500">{pio.state}</div>
                          <div className="text-xs text-gray-400">{pio.category}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm text-gray-900">{pio.email}</div>
                          <div className="text-sm text-gray-500">{pio.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm text-gray-900">{pio.jurisdiction}</div>
                          <div className="text-sm text-gray-500">{pio.workingHours}</div>
                          <div className="text-xs text-gray-400">Pincode: {pio.pincode}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col space-y-2 ">
                          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition duration-300">
                            📧 Contact
                          </button>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition duration-300">
                            📄 RTI Application
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No PIOs found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or browse all available PIOs.</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">File RTI Application</h3>
            <p className="text-gray-600 mb-4">Submit Right to Information requests online</p>
            <Link to="/rti-application" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300">
              Apply Now
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Support</h3>
            <p className="text-gray-600 mb-4">Get help with PIO search and RTI applications</p>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300">
              Contact Us
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">RTI Guidelines</h3>
            <p className="text-gray-600 mb-4">Learn about RTI Act and application process</p>
            <Link to="/rti-guidelines" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
