const mongoose = require('mongoose');
/*
mongoose.connect('mongodb+srv://kaypiAdmin:kaypiAdmin123@clusterkaypi.1nlh5.mongodb.net/kaypi', {
    useNewUrlParser: true
})
*/
mongoose.connect('mongodb+srv://KaypiAdmin:KaypiAdmin1234@cluster0.plmtfgc.mongodb.net/kaypi?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true
})
.then (db => console.log('DB is connected'))
.catch(err => console.error(err));