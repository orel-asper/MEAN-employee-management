const employeeRoute = require('express').Router()

//Employee model
let Employee = require('../models/Employee')

//Add Employee
employeeRoute.post('/create', (req, res) => {
    Employee.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json({ data: data, msg: "added soccesfuly" })
        }
    })
})

//Get all the Employees
employeeRoute.get('/', (req, res) => {
    Employee.find((err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json(data);
        }
    })
})

//Get one employee
employeeRoute.get('/read/:id', (req, res) => {
    Employee.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json(data);
        }
    })
})

//update employee $set
employeeRoute.put('/update/:id', (req, res) => {
    Employee.findByIdAndUpdate(req.params.id,
        { $set: req.body }, (err, data) => {
            if (err) {
                res.status(500).send({ error: true, msg: err.message })
            } else {
                res.status(200).json({ data: data, msg: "updated soccesfuly" });
            }
        }
    )
})

//Delete employee
employeeRoute.delete('/delete/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json({ data: data, msg: "deleted soccesfuly" });
        }
    })
})


module.exports = employeeRoute