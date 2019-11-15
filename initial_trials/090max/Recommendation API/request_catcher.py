import requests
url='http://127.0.0.1:5000/insert/1'
with requests.Session() as session:
    post=session.post(url)
    print(post.content)