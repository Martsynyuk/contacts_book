'use strict';

let express          = require('express')
  , app              = express()
  , port             = 3000;

app.set('view engine', 'jade');
app.set('views', 'src/view');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + ' !');
});
