---
title: 'Optimization Strategies to Reduce Databricks Costs'
date: 2024-07-22
permalink: /posts/2014/08/optimization-strategies-to-reduce-databricks-costs/
tags:
  - pyspark
  - databricks
  - data engineering
  - cost optimization
  - data science
---

Hello everyone! Today I’d like to share some implementations I made in my Databricks workspace that significantly reduced costs. Before delving into the technical details, let’s briefly summarize our workspace configuration.

![Intro Image](\images\Post Images\post_image_31.png)

We have:

1. One all-purpose cluster
2. One SQL serverless compute
3. The ability to create job clusters for daily workflows

Furthermore, my workspace needs to support the following activities:

1. Ad hoc data queries during business hours
2. Notebook development and testing
3. Production workload for daily data extraction jobs
4. Data Integration activities using Azure Data Factory

<p style="text-align: center;">. . . </p>

Let’s begin with ad hoc data queries. We know that SQL serverless compute provides instantaneous startup capability, essentially eliminating the usual wait time for clusters to be ready. While this is a valuable feature, I figured that ad hoc requests can typically tolerate 4 to 5 minutes of startup time. Moreover, Databricks offers classic SQL compute at approximately one-third the price of serverless compute. On this note, I decided to experiment and switched SQL serverless compute to classic compute.

The new configuration, featuring auto-scaling from 4 to 10 DBUs per hour and auto-termination after 10 minutes of inactivity on classic SQL compute, helped reduce costs by almost 50 percent compared to serverless compute.

![Cost 1](\images\Post Images\post_image_32.png)

<p style="text-align: center;">. . . </p>

The development of notebooks and Azure Data Factory (ADF) integration pipelines requires an all-purpose or interactive cluster. These clusters are available for Scala, Python, or SQL. We know that these clusters are significantly more expensive and are primarily responsible for the increased costs of the overall workspace.

Moreover, the integration activities run almost 24/7, whereas development is carried out sporadically during business hours. Therefore, it logically followed that instead of having only one interactive cluster, we could have two:

1. A cluster with low to medium compute capacity for ADF pipelines
2. A [spot instance](https://www.databricks.com/blog/2021/05/25/leverage-unused-compute-capacity-for-data-ai-with-azure-spot-instances-and-azure-databricks.html) enabled cluster with auto-termination for development purposes.

Note that spot instances are suitable only for development activities where a slight delay in process completion time is not critical, especially since spot instances are made available as unused VMs at deep discounts.

The segregation of activities helped keep the development cluster terminated for most of the day, providing immense cost reductions.

![Cost 2](\images\Post Images\post_image_33.png)

This initiative has yielded good results in terms of cost reduction:

![Cost 2](\images\Post Images\post_image_34.png)

<p style="text-align: center;">. . . </p>

Finally, let’s discuss job compute clusters. These are inexpensive and fast, making them highly suitable for heavy data extraction workloads. The best method to reduce costs for job compute clusters is to analyze worker node activity during job runs. This analysis helps us understand the optimal range of worker nodes required to complete our jobs quickly without incurring extra costs. To view Number of active nodes, open **Metrics** from cluster details:

![Cost 2](\images\Post Images\post_image_35.png)

The given plot suggests that job execution requires a higher number of nodes than the minimum worker node limit for almost major part of job execution, indicating that the job compute is not underutilized. Additionally, the maximum worker node limit is sufficient for the performance I am achieving from the job execution, and there is no need to increase my compute size further.

<p style="text-align: center;">. . . </p>

The combination of these methods yielded impressive results without requiring any code optimizations. This is a significant achievement because we now know that before modifying the existing codebase, which involves more effort, we have a solid starting point with promising outcomes.

The overall activity reduced costs by around **34%** in three months period.

![Cost 2](\images\Post Images\post_image_36.png)

<p style="text-align: center;">. . . </p>

Thank you for your attention! As always, I’m eager to discuss your experiences and tactics on this topic. Please let me know in the comments section.
