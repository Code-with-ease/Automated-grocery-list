import pandas as pd

df = pd.read_json("file.json")

print(df.head(2))
print(df.shape)

nested_json = """
[
    {
        "id":0,
        "name": "learning python1",
        "page": 320,
        "authors":  [
                        {"name": "A11", "age": 31},
                        {"name": "A21", "age": 41}
                    ]
    },
    {
        "id":1,
        "name": "learning python2",
        "page": 321,
        "authors":  [
                        {"name": "A12", "age": 32},
                        {"name": "A22", "age": 42}
                    ]
    },
    {
        "id":2,
        "name": "learning python3",
        "page": 322,
        "authors":  [
                        {"name": "A1", "age": 33},
                        {"name": "A2", "age": 43}
                    ]
    }
]
"""

import json
from pandas.io.json import json_normalize
nested=df.to_dict('id')
nested.add(nested)
print(nested)
nested = json.loads(nested_json)

print(nested)

# nested_list=list(nested)
nested_full = json_normalize(nested)
print("\n\n")

add = {
        "id":3,
        "name": "learning python3",
        "page": 322,
        "authors":  [
                        {"name": "A1", "age": 33},
                        {"name": "A2", "age": 43}
                    ]
    }

print(type(nested))
nested.append(add)

print(type(nested_full))
nested_full = json_normalize(nested)

print(nested_full)
article = json_normalize(nested,record_path ='authors')

print(article)
