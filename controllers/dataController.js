const Data = require("../models/Data");

exports.getAllData = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(200).json(data);
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getFilteredData = async (req, res) => {
  const { end_year, topic, sector, region, pestle, source, country, city } =
    req.query;
  const filter = {};

  if (end_year) filter.end_year = end_year;
  if (topic) filter.topic = topic;
  if (sector) filter.sector = sector;
  if (region) filter.region = region;
  if (pestle) filter.pestle = pestle;
  if (source) filter.source = source;
  if (country) filter.country = country;
  if (city) filter.city = city;

  try {
    const data = await Data.find(filter);
    res.status(200).json(data);
  } catch (err) {
    console.error("Error retrieving filtered data:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getTotalLikelihood = async (req, res) => {
  try {
    const data = await Data.find({});
    const totalLikelihood = data.reduce(
      (acc, curr) => acc + curr.likelihood,
      0
    );
    res.status(200).json({ totalLikelihood });
  } catch (err) {
    console.error("Error calculating total likelihood:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getTotalCountries = async (req, res) => {
  try {
    const data = await Data.find({});
    const countries = countOccurrences(data, "country");
    res.status(200).json({ totalCountries: Object.keys(countries).length });
  } catch (err) {
    console.error("Error calculating total countries:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getTotalSectors = async (req, res) => {
  try {
    const data = await Data.find({});
    const sectors = countOccurrences(data, "sector");
    res.status(200).json({ totalSectors: Object.keys(sectors).length });
  } catch (err) {
    console.error("Error calculating total sectors:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getTotalTopics = async (req, res) => {
  try {
    const data = await Data.find({});
    const topics = countOccurrences(data, "topic");
    res.status(200).json({ totalTopics: Object.keys(topics).length });
  } catch (err) {
    console.error("Error calculating total topics:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getTotalSources = async (req, res) => {
  try {
    const data = await Data.find({});
    const sources = countOccurrences(data, "source");
    res.status(200).json({ totalSources: Object.keys(sources).length });
  } catch (err) {
    console.error("Error calculating total sources:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllInsights = async (req, res) => {
  try {
    const data = await Data.find({}, "insight");
    const insights = data.map((item) => item.insight);
    res.status(200).json({ insights });
  } catch (err) {
    console.error("Error retrieving insights:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getTotalRelevance = async (req, res) => {
  try {
    const data = await Data.find({});
    const totalRelevance = data.reduce((acc, curr) => acc + curr.relevance, 0);
    res.status(200).json({ totalRelevance });
  } catch (err) {
    console.error("Error calculating total relevance:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllEndYears = async (req, res) => {
  try {
    const endYears = await Data.distinct("end_year");
    res.status(200).json(endYears);
  } catch (err) {
    console.error("Error retrieving end years:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Data.distinct("topic");
    res.status(200).json(topics);
  } catch (err) {
    console.error("Error retrieving topics:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllIntensities = async (req, res) => {
  try {
    const intensities = await Data.distinct("intensity");
    res.status(200).json(intensities);
  } catch (err) {
    console.error("Error retrieving intensities:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllSectors = async (req, res) => {
  try {
    const sectors = await Data.distinct("sector");
    res.status(200).json(sectors);
  } catch (err) {
    console.error("Error retrieving sectors:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllRegions = async (req, res) => {
  try {
    const regions = await Data.distinct("region");
    res.status(200).json(regions);
  } catch (err) {
    console.error("Error retrieving regions:", err);
    res.status(500).json({ message: err.message });
  }
};
exports.getAllPestleOptions = async (req, res) => {
  try {
    const pestleOptions = await Data.distinct("pestle");
    res.status(200).json(pestleOptions);
  } catch (err) {
    console.error("Error retrieving pestle options:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllDataOptions = async (req, res) => {
  try {
    const endYears = await Data.distinct("end_year");
    const topics = await Data.distinct("topic");
    const intensities = await Data.distinct("intensity");
    const sectors = await Data.distinct("sector");
    const regions = await Data.distinct("region");
    const pestle = await Data.distinct("pestle");

    const dataOptions = {
      end_years: endYears,
      topics: topics,
      intensities: intensities,
      sectors: sectors,
      regions: regions,
      pestle: pestle,
    };
    res.status(200).json(dataOptions);
  } catch (err) {
    console.error("Error retrieving data options:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllCountries = async (req, res) => {
  try {
    const countries = await Data.distinct("country");
    res.status(200).json({ countries });
  } catch (err) {
    console.error("Error retrieving countries:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(200).json(data);
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllPublished = async (req, res) => {
  try {
    const publishedData = await Data.find({}, "published");
    res.status(200).json(publishedData);
  } catch (err) {
    console.error("Error retrieving published data:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllTitles = async (req, res) => {
  try {
    const titles = await Data.find({}, "title");
    res.status(200).json(titles);
  } catch (err) {
    console.error("Error retrieving titles:", err);
    res.status(500).json({ message: err.message });
  }
};

function countOccurrences(data, field) {
  const counts = {};
  data.forEach((item) => {
    const value = item[field];
    counts[value] = counts[value] ? counts[value] + 1 : 1;
  });
  return counts;
}
