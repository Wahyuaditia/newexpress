const index = (req,res) =>{
    res.render('index', {title: 'express',layout:'main'});

}



    const about= (req,res) =>{
        res.render('about',{title: "About us", layout: "main"});
    }


    const contact = (req,res) => {
        res.render('contact', {title:"contact"})
    }

    module.exports = {index, about,contact}