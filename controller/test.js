const { processData, getDdmmyyyyFromTimestamp } = require("../helpers/helper");

const handleBfhlRequest = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input: The "data" field must be an array.',
      });
    }

    const { oddNumbers, evenNumbers, alphabets, specialCharacters, sum, concatString } = processData(data);
    const name = "Nainsi Gupta";
    const email = "nainsigupta2022@vitbhopal.ac.in"
    const response = {
      is_success: true,
      user_id:`${name}+${getDdmmyyyyFromTimestamp()}`,
      email,
      roll_number: '22BCE11293',
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: String(sum),
      concat_string: concatString,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error processing /bfhl request:', error);
    res.status(500).json({
      is_success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
};

module.exports = {
  handleBfhlRequest,
};