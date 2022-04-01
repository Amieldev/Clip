const say=require('say');

function Speech(text,filename){
    say.export(text,null,1.0,filename);
}

module.exports={
    Speech
}