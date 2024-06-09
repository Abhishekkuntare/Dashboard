
//this data is already calculate from database
const TotalLikelihood = 345; 
const TotalCountries = 57; 
const TotalSectors = 19; 
const TotalTopics = 98; 
const TotalSource = 304;

exports.getPieData = (req, res) => {
    const pieData = [
        { id: 'TotalLikelihood', value: TotalLikelihood },
        { id: 'TotalCountries', value: TotalCountries },
        { id: 'TotalSectors', value: TotalSectors },
        { id: 'TotalTopics', value: TotalTopics },
        { id: 'TotalSource', value: TotalSource }
    ];
    res.json(pieData);
};
