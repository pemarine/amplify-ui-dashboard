// VesselSort.tsx
const sortVessels = (vessels, sortOption) => {
    switch (sortOption) {
        case 'Name':
            return [...vessels].sort((a, b) => a.SHIPNAME.localeCompare(b.SHIPNAME));
        case 'Flag': // Add this case
            return [...vessels].sort((a, b) => a.FLAG.localeCompare(b.FLAG));
        // Add more cases as needed
        // Add more cases as needed
        default:
            return vessels;
    }
};

export { sortVessels };