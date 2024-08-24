---
title: 'HOW TO: Create a new job on Databricks using Jobs API'
date: 2024-05-12
permalink: /posts/2024/05/how-to-create-a-new-job-on-databricks-using-jobs-api/
tags:
  - azure
  - databricks
  - python
  - jobs api
  - data engineering
---

Databricks empowers organizations of all sizes to unlock the full potential of their data, accelerating decision-making and driving innovation. Its unified analytics platform streamlines data processing, enabling seamless extraction of actionable insights for informed decision-making.

But are you taking advantage of its rich set of APIs?

If not, then this article is for you! You can unlock the full potential of Databricks with 5–10 lines of simple python code. In this article we will discuss:

1. Exploring Jobs API 2.0/2.1 documentation and setting up your request configurations.
2. Create Databricks authorization token.
3. Create your first job through API call.

![Databricks View](\images\Post Images\post_image_11.png)


<p style="text-align: center;">. . . </p>

**Step 1:** Open your favorite internet browser and type Databricks Jobs API Documentation or simply click on [Jobs API - REST API reference - Azure Databricks](https://docs.databricks.com/api/azure/workspace/jobs). You will land on this page -


![Databricks Jobs API](\images\Post Images\post_image_12.png)


Click on **Create a new job** option from the left-side panel and you will see documentation for creating a request. You can see that this is a post request ```/api/2.1/jobs/create```. We will add this endpoint with our workspace URL to post a REST API request. (If you are not familiar with python’s requests module for API management, go quickly visit [Python and REST APIs: Interacting With Web Services — Real Python](https://realpython.com/api-integration-in-python/))


![Create New Job API Endpoint](\images\Post Images\post_image_13.png)


Use the code snippet given below to form REST API request URL —

```python
workspace_url = "https://adb-<workspace-id>.<random-number>.azuredatabricks.net"
url = workspace_url + "/api/2.1/jobs/create"
```

Now we will define our request body using the set of parameters mentioned in the documentation. Here I will only use few parameters for demonstration. Once you are familiar with the process, do explore all of the unique features to fine-tune your performance and increase complexity

Define **name** of your job. If not mentioned, default value will be used.

`name type: string =< 4096 characters (Default value: "Untitled")`

Add **list** of tasks to be executed. Tasks will run in a sequential order as given in your list. For the purpose of demonstration, I will stick to one task only.

`tasks type: List of Objects =< 100 items`

Within a single task object, define `task_key`, `existing_cluster_id` and a `task`. A task can be `notebook_task`, `spark_jar_task`, `pipeline_task` etc. Today we will create a notebook task and provide its `path` from Databricks workspace.

Provide `timeout_seconds`. I feel that specifying timeout amount is a good practice to handle unexpected behavior and it ensures that we are not overloading our workspace.

Finally add `tags`. Tags are a great way to classify jobs for control and monitoring. They especially help when you have huge workload.

Your final request body will look like this —

```json
body = {
  "name" : "MyJob",
  "tasks" : [
    {
      "task_key" : "run notebook from workspace",
      "existing_cluster_id" : "0914-084715-44dhyjfb",
      "notebook_task" : {
        "notebook_path" : "/Users/your/notebook/path",
        "source" : "WORKSPACE"
        }
    }
  ]
  "timeout_seconds" : 3600,
  "tags" : {
    "project" : "data_analytics",
    "process" : "extraction"
   } 
}
```

<p style="text-align: center;">. . . </p>

**Step 2:** Every REST API call requires correct authentication key. Databricks provides individual level authentication tokens for secure access.

Go to **settings** at the top-right section of your Databricks workspace and click on **Developer/Access** tokens.


![Developer Access Token](\images\Post Images\post_image_14.png)


Click on **Manage** and finally on **Generate new token**. Make sure to copy your token and store it securely.


![Developer Access Token](\images\Post Images\post_image_15.png)


**Step 3:** Great! We are ready to create our very first Databricks job.

Let's quickly import python libraries.

```python
import requests
import json
```


define request URL and request body.


```python
workspace_url = "https://adb-<your workspace><id>.azuredatabricks.net"

url = workspace_url + "/api/2.1/jobs/create"

body = {
  "name" : "MyJob",
  "tasks" : [
    {
      "task_key" : "run notebook from workspace",
      "existing_cluster_id" : "0914-084715-44dhyjfb",
      "notebook_task" : {
        "notebook_path" : "/Users/your/notebook/path",
        "source" : "WORKSPACE"
        }
    }
  ]
  "timeout_seconds" : 3600,
  "tags" : {
    "project" : "data_analytics",
    "process" : "extraction"
   } 
}
```

create headers.

```python
token = "your_personal_access_token"

headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}
```

And post a request. After successful run, your job will get created.

```python
response = requests.post(url, headers = headers, data = json.dumps(body))

print(response.status_code)
print(response.text)
```

Check output —

```
200
{"job_id":465463453}
```

<p style="text-align: center;">. . . </p>

Congratulations!!!<br>
You have successfully created a Databrick Job using REST API.
