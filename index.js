const XLSX = require('xlsx')
const express = require('express')
const server = express()

const extractStudentInfo = (path, sheetName) => {
  // Read file
  const workbook = XLSX.readFile(path)

  const worksheet = workbook.Sheets[sheetName]

  // define the columns 
  // convert worksheet to JSON Data
  const data = XLSX.utils.sheet_to_json(worksheet)

  return data
}

(() => {
  try {

    let data = extractStudentInfo('test.xlsx', 'Sheet1')
    
    console.log(data)
    
  } catch(e) {
    console.log('Error Occured in main fn : ', e)
  }
})()