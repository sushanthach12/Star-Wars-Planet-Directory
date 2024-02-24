import React, { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';

type FilterModalProps = {
    open: boolean;
    onClose: () => void;
    onFilterApply: (filterOptions: object) => void;
}

const FilterModal: FC<FilterModalProps> = ({ open, onClose, onFilterApply }) => {
    const [filterOptions, setFilterOptions] = useState({
        age: 10
    });

    const handleInputChange = (event: any) => {
        setFilterOptions({
            ...filterOptions,
            [event.target.name]: event.target.value,
        });
    };

    const handleApply = () => {
        onFilterApply(filterOptions); // Send filter options to parent component
        onClose(); // Close the modal
    };

    const handleCloseFilterModal = () => {
        onClose(); // Call the parent component's onClose function
    };

    return (
        <div
            className={`fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 transition-opacity duration-300 ease-in-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
        >
            <div className="relative mx-auto p-4 w-full max-w-md mt-20">
                <div className="w-full rounded-lg bg-white shadow-md">
                    <div className="p-6">
                        <h3 className="mb-2 text-lg font-semibold text-center">
                            Filter Options
                        </h3>
                        {/* Add your filter input fields here (e.g., select, text input) */}
                        {/* Example: */}
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-sm font-medium mb-2">
                                Category:
                            </label>
                            <select
                                id="category"
                                name="category"
                                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleInputChange}
                            >
                                {/* Add your category options here */}
                                <option value="">All</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                            </select>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md font-medium text-xs mr-4 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={handleCloseFilterModal}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-medium text-xs text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                onClick={handleApply}
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;