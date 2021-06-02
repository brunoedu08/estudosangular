const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/estudosangular'));
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/estudosangular/index.html');
});

app.listen(PORT, () => {
    console.log(('Servidor iniciado na porta' + PORT));
})