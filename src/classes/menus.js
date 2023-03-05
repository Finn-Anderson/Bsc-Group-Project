
/*
    Development build version: 0.1
    Build date: 02/03/2023
    Author: Bsc Team Project Group 2023
    Description: Menu Navigation Components
*/

AFRAME.registerComponent('menu', {
    schema: {
        menu:{type:"string",default:""},
    },

    init: function() {

        var menu = this.data.menu;

        this.setMenu = function() {
            console.log(1);
        }

    },
    update: function() {},
    remove: function() {}
})
