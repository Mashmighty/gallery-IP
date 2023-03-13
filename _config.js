var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://GeorgeM:<0727281000>@darkroom.ijk3whf.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://GeorgeM:<password>@darkroom.ijk3whf.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://GeorgeM:<password>@darkroom.ijk3whf.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
