---
title: 'HOW TO: Use secrets in Databricks to secure your credentials'
date: 2024-06-25
permalink: /posts/2024/06/how-to-use-secrets-in-databricks-to-secure-your-credentials/
tags:
  - databricks
  - data engineering
  - azure
  - aws
  - secrets api
---

Often, we find it necessary to use authentication keys and passwords in Databricks notebooks to establish database connections through JDBC. Instead of directly using sensitive strings in plaintext, we can use Databricks secrets to store and use credentials and reference them in notebooks and workflows. To manage credentials, use [secrets API](https://docs.databricks.com/api/workspace/secrets).


![Secret Management](\images\Post Images\post_image_21.png)

<p style="text-align: center;">. . . </p>

Following steps will guide you to create a secret scope, add a secret and use secret securely in Databricks notebook execution.

**Step 1:** Create new secret scope

Initialize your Databricks workspace URL and use below API endpoint. Additionally, define request body as given below —

```python
workspace_url = "https://adb-<workspace-id>.<random-number>.azuredatabricks.net"
url = workspace_url + "/api/2.0/secrets/scopes/create"

token = "yourDatabricksToken"

payload = {
  "scope": "myScope",
  "scope_backend_type": "DATABRICKS" # Default value.
}
```

Create Databricks token. If you have not created one before, go checkout [this](_posts\2024-05-12-how-to-create-a-new-job-on-databricks-using-jobs-api.md) post, and you will get detailed steps to create your own Databricks token.

Now that we have all the required elements, let’s create a post request using python’s requests library.

```python
import requests
import json

headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}

response = requests.post(url, headers = headers, data = json.dumps(payload))

print(response.status_code)
print(response.text)
```

```
200
{}
```

**Step 2:** Add a secret

Use API endpoint `/api/2.0/secrets/put` along with a put request to add a new secret.

```python
url = workspace_url + "/api/2.0/secrets/put"

payload = {
  "scope": "myScope",
  "key": "LoginPassword",
  "string_value": "SamplePassword@456"
}

response = requests.post(url, headers = headers, data = json.dumps(payload))

print(response.status_code)
print(response.text)
```

```
200
{}
```

**Step 3:** Use secret in Databricks notebook —

Use below code to use newly added secret in Databricks notebook

```
password = dbutils.secrets.get(scope="myScope",key="LoginPassword")
print(password)
```

```
'[REDACTED]'
```

Interesting thing to note is that a print statement will not reveal the value. This is a very helpful feature while using secrets within a team!

<p style="text-align: center;">. . . </p>

Hope you are now ready to apply this method in your Databricks notebooks. You are welcome to share your thoughts on this topic!