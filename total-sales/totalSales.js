/*
    Write a function that takes in a sales team object
    Return the total sales across ALL team members.

    ex: totalSales(salesTeam) => 190
*/

const salesTeam = {
    name: 'Tom',
    individualSales: 30,
    manages: [{
        name: 'Bob',
        individualSales: 25,
        manages: [{
            name: 'Tim',
            individualSales: 35,
            manages: []
        },
        {
            name: 'Joe',
            individualSales: 10,
            manages: []
        },
        {
            name: 'Fred',
            individualSales: 5,
            manages: []
        }
        ]
    },
    {
        name: 'Debbie',
        individualSales: 50,
        manages: [{
            name: 'Jae',
            individualSales: 20,
            manages: [{
                name: 'Austin',
                individualSales: 15,
                manages: []
            }]
        }]
    }
    ]
};

const totalSales = (team) => {

};

//Do not change this line, the function name, or salesTeam object!
module.exports = { totalSales, salesTeam };

//Run this line to check your answer
//npm test ./total-sales/totalSales.test.js
