const express=require('express')



const logger=((req, res, next) => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const isWorkingHour = day >= 1 && day <= 5 && hour >= 9 && hour <= 17;
  
    if (isWorkingHour) {
      next();
    } else {
      res.send('Sorry, we are closed now.');
    }
  });
  module.exports=logger