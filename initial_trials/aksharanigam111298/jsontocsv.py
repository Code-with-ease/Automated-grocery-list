import json
import csv

def get_leaves(item, key=None):
    if isinstance(item, dict):
        leaves = {}
        for i in item.keys():
            leaves.update(get_leaves(item[i], i))
        return leaves
    elif isinstance(item, list):
        leaves = {}
        for i in item:
            leaves.update(get_leaves(i, key))
        return leaves
    else:
        return {key : item}


with open('main.json') as f_input:
    json_data = json.load(f_input)

# First parse all entries to get the complete fieldname list
fieldnames = set()

for entry in json_data:
    fieldnames.update(get_leaves(entry).keys())

with open('test.csv', 'w', newline='') as f_output:
    csv_output = csv.DictWriter(f_output, fieldnames=fieldnames)
    csv_output.writeheader()
    csv_output.writerows(get_leaves(entry) for entry in json_data)



# def get_leaves(item, key=None):
#
#     if isinstance(item, dict):
#         leaves = []
#         for i in item.keys():
#             leaves.extend(get_leaves(item[i], i))
#         return leaves
#     elif isinstance(item, list):
#         leaves = []
#         for i in item:
#             leaves.extend(get_leaves(i, key))
#         return leaves
#     else:
#         return [(key, item)]
#
#
# with open('main.json') as f_input, open('test.csv', 'w', newline='') as f_output:
#     csv_output = csv.writer(f_output)
#     write_header = True
#
#     for entry in json.load(f_input):
#         leaf_entries = get_leaves(entry)
#
#         if write_header:
#             csv_output.writerow([k for k, v in leaf_entries])
#             write_header = False
#
#         csv_output.writerow([v for k, v in leaf_entries])

