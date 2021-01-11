const data = 
{
  "errors": [
    {
      "status": "403",
      "source": { "pointer": "/data/attributes/secretPowers" },
      "detail": "Editing secret powers is not authorized on Sundays."
    },
    {
      "status": "422",
      "source": { "pointer": "/data/attributes/volume" },
      "detail": "Volume does not, in fact, go to 11."
    },
    {
      "status": "500",
      "source": { "pointer": "/data/attributes/reputation" },
      "title": "The backend responded with an error",
      "detail": "Reputation service not responding after three requests."
    }
  ]
}


const dataMapped = data.errors.map(ele => console.log("The Error: " + ele.detail)) 


const data2 = 
{
"data": [
    {
      "type": "articles",
      "id": "1",
      "attributes": {
      "title": "JSON:API paints my bikeshed!",
      "body": "The shortest article. Ever."
    }
  }],
"included": [
    {
      "type": "people",
      "id": "42",
      "attributes": {
        "name": "John"
      }
    }
  ]
}

const filterMap = data2.data.forEach(element => console.log(element))
console.log(filterMap)