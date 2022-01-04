# BMI

The application api's have been deployed to Heroku.

# Curl

curl --location --request POST 'https://rhea-bmi.herokuapp.com/v1/calculate/bmi' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    },
    {
        "Gender": "Male",
        "HeightCm": 161,
        "WeightKg": 85
    },
    {
        "Gender": "Male",
        "HeightCm": 180,
        "WeightKg": 77
    },
    {
        "Gender": "Female",
        "HeightCm": 166,
        "WeightKg": 62
    },
    {
        "Gender": "Female",
        "HeightCm": 150,
        "WeightKg": 70
    },
    {
        "Gender": "Female",
        "HeightCm": 167,
        "WeightKg": 82
    }
]'
  

# Api's


  Api : /v1/calculate/bmi
  
  Method : POST
  
  Sample Request Body : [
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    },
    {
        "Gender": "Male",
        "HeightCm": 161,
        "WeightKg": 85
    }
  ]

Sample Response : 
{
    "success": true,
    "message": "Done",
    "data": {
        "result": [
            {
                "Gender": "Male",
                "HeightCm": 171,
                "WeightKg": 96,
                "Bmi": 32.8,
                "Risk": "Medium risk",
                "Cateogory": "Moderately obese"
            },
            {
                "Gender": "Male",
                "HeightCm": 161,
                "WeightKg": 85,
                "Bmi": 32.8,
                "Risk": "Medium risk",
                "Cateogory": "Moderately obese"
            }
        ],
        "overweightCount": 0
    }
}
  

 
