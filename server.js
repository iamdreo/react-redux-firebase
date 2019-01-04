    const {createServer} = require('https');
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const processMessage = require('./process-message');
    const compression = require('compression');
    const morgan = require('morgan');
    const path = require('path');

    const app = express();

    const dev = app.get('env') !== 'production'

    if (!dev) { 
        app.disable('x-powered-by')
        app.use(compression())
        app.use(morgan('common'))

        app.use(express.static(path.resolve(__dirname, 'build')))

        app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
        });
      
       }


       app.use(cors());
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({ extended: true }));

       app.post('/', (req, res) => {
       const { message } = req.body;
       processMessage(message);
       });

    

    app.set('port', process.env.PORT || 5000);
    const server = app.listen(app.get('port'), () => {
      console.log(`Express running → PORT ${server.address().port}`);
    })