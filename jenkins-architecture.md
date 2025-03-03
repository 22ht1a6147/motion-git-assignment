               +----------------+
               |   Jenkins UI   |  (User Interface)
               +----------------+
                       |
                       v
        +----------------------------+
        |      Master Node (Jenkins)  |
        |  - Job Scheduling           |
        |  - Plugin Management        |
        |  - UI & Configuration       |
        +----------------------------+
                  |       |
       +----------+       +----------+
       |                           |
+-----------------+        +-----------------+
|  Agent Node 1  |        |  Agent Node 2  |
|  (Linux Build) |        |  (Windows Build) |
+-----------------+        +-----------------+
       |                           |
       v                           v
+--------------------+       +--------------------+
| AWS CodeDeploy    |       | AWS S3 for Artifacts|
| Deploy to EC2     |       | Store build outputs |
+--------------------+       +--------------------+
