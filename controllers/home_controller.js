const Task = require('../models/task');

module.exports.home = function(req,res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log("error in fetching contacts from db:",err);
            return;
        }
        return res.render('home',{
            task_list: tasks
        });

    })
}
module.exports.create = function(req, res){
    Task.create({
        description: req.body.description,
        category: req.body.category,
        due_date: req.body.due_date
    }, function(err, newTask){
        if(err){console.log('Error in creating a contact!:',err)
            return;}
            console.log('******', newTask);
            return res.redirect('back');
    });
};