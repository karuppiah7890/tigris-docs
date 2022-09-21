---
title: Deployment
---

# Deployment

## Introduction

Tigris is developed with Kubernetes in mind and is fully containerized. We expect you to deploy Tigris on Kubernetes in production.

If you are having a hard time installing Tigris yourself, seek help from the Tigris Data Community! Consider joining [our Slack](https://join.slack.com/t/tigrisdatacommunity/shared_invite/zt-1hrx3hv78-rw~81EoqxwgiUCURZnWF1g) and seek assistance there!

## Prerequisites

- amd64 architecture
- helm utility
- kubernetes cluster with sufficient resources

This guide was tested with k3s running on a 2 vCPU / 8G RAM node. At current time FoundationDB requires amd64 architecture so that's a requirement for Tigris as well.

## Components

The installation will deploy the following components:

- Kubernetes Operator for FoundationDB
- NGINX Controller
- FoundationDB Cluster
- Tigris Search
- Tigris Server

To make the deployment process simple, the components can be deployed in one step using our deployment script which deploys the components through a single Helm Chart called `tigris-stack`.

The section Scripted Installation shows the simple process of installing these components in one fell swoop. The section following it expands a bit on the installation process to shed more light on what the script does behind the scene.

## Scripted Installation

Check out this repository and navigate to where it's located to execute `deploy.sh`:

```shell
$ bash deploy.sh
Getting updates for unmanaged Helm repositories...
...Successfully got an update from the "https://kubernetes.github.io/ingress-nginx" chart repository
Saving 5 charts
Downloading ingress-nginx from repo https://kubernetes.github.io/ingress-nginx
Deleting outdated charts
NAME: tigris-stack
LAST DEPLOYED: Wed Oct  5 17:53:15 2022
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
```

Above will install a Helm Chart called `tigris-stack`:

```shell
$ helm list
NAME        	NAMESPACE	REVISION	UPDATED                                	STATUS	CHART             	APP VERSION
tigris-stack	default  	1       	2022-10-07 22:43:04.980736006 +0000 UTC	failed	tigris-stack-0.1.0	1.0.0
```

The Chart will pull in all the subsequent dependencies for a complete install and after a short each component should become available and running:

![Dashboard](/img/tigris_stack_minikube_dashboard.png)

```shell
$ kubectl get all,pv,pvc,ingress
NAME                                                        READY   STATUS    RESTARTS        AGE
pod/tigris-stack-ingress-nginx-controller-c974585bf-ll5zl   1/1     Running   0               3m41s
pod/tigris-search-0                                         2/2     Running   1 (3m33s ago)   3m41s
pod/tigris-stack-fdb-operator-6786df8f7c-p4hw8              1/1     Running   0               3m41s
pod/fdb-cluster-log-1                                       2/2     Running   0               102s
pod/fdb-cluster-stateless-1                                 2/2     Running   0               102s
pod/fdb-cluster-storage-1                                   2/2     Running   0               102s
pod/tigris-server-6b45b5d6c4-rf5pr                          1/1     Running   2 (83s ago)     3m41s

NAME                                                      TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
service/kubernetes                                        ClusterIP      10.43.0.1       <none>        443/TCP                      7d21h
service/ts                                                ClusterIP      None            <none>        8108/TCP                     3m41s
service/tigris-headless                                   ClusterIP      None            <none>        8080/TCP                     3m41s
service/tigris-http                                       NodePort       10.43.50.246    <none>        80:32387/TCP                 3m41s
service/tigris-stack-ingress-nginx-controller-admission   ClusterIP      10.43.228.121   <none>        443/TCP                      3m41s
service/tigris-stack-ingress-nginx-controller             LoadBalancer   10.43.131.198   <pending>     80:31886/TCP,443:32671/TCP   3m41s
service/tigris-search                                     NodePort       10.43.99.214    <none>        80:32271/TCP                 3m41s
service/tigris-grpc                                       NodePort       10.43.228.99    <none>        80:31482/TCP                 3m41s

NAME                                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/tigris-stack-ingress-nginx-controller   1/1     1            1           3m41s
deployment.apps/tigris-stack-fdb-operator               1/1     1            1           3m41s
deployment.apps/tigris-server                           1/1     1            1           3m41s

NAME                                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/tigris-stack-ingress-nginx-controller-c974585bf   1         1         1       3m41s
replicaset.apps/tigris-stack-fdb-operator-6786df8f7c              1         1         1       3m41s
replicaset.apps/tigris-server-6b45b5d6c4                          1         1         1       3m41s

NAME                             READY   AGE
statefulset.apps/tigris-search   1/1     3m41s

NAME                                                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                                STORAGECLASS   REASON   AGE
persistentvolume/pvc-e7e4328b-412a-42da-be8f-1346e7246d5d   100Mi      RWO            Delete           Bound    default/data-tigris-search-0         local-path              3m37s
persistentvolume/pvc-baf4dfb5-7a50-41cf-9279-5420bace7d78   100Mi      RWO            Delete           Bound    default/fdb-cluster-log-1-data       local-path              99s
persistentvolume/pvc-a71b1576-fe83-4bf6-a54a-a87be70f2803   100Mi      RWO            Delete           Bound    default/fdb-cluster-storage-1-data   local-path              99s

NAME                                               STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/data-tigris-search-0         Bound    pvc-e7e4328b-412a-42da-be8f-1346e7246d5d   100Mi      RWO            local-path     3m42s
persistentvolumeclaim/fdb-cluster-log-1-data       Bound    pvc-baf4dfb5-7a50-41cf-9279-5420bace7d78   100Mi      RWO            local-path     103s
persistentvolumeclaim/fdb-cluster-storage-1-data   Bound    pvc-a71b1576-fe83-4bf6-a54a-a87be70f2803   100Mi      RWO            local-path     103s

NAME                                      CLASS   HOSTS   ADDRESS   PORTS   AGE
ingress.networking.k8s.io/tigris-server   nginx   *                 80      3m42s
```

## Installation Process Expanded

The `deploy.sh` script installs a single Helm chart called `tigris-stack`.

Tigris-stack describes the dependencies for the open source installation:

```yaml
$ cat Chart.yaml
apiVersion: v2
name: tigris-stack
description: Tigris Stack
type: application
version: 0.1.0
appVersion: "1.0.0"
dependencies:
  - name: fdb-operator
    version: 0.2.0
    repository: file://../fdb-operator
  - name: fdb-cluster
    version: 0.1.0
    repository: file://../fdb-cluster
  - name: tigris-search
    version: 0.1.0
    repository: file://../tigris-search
  - name: ingress-nginx
    version: 4.3.0
    repository: https://kubernetes.github.io/ingress-nginx
  - name: tigris-server
    version: 0.1.0
    repository: file://../tigris-server
```

**_NOTE_** The list of dependencies is expected to expanded over time as we add more components! Expect more features to be added soon!

### FoundationDB

The first component installed by `tigris-stack` is FoundationDB.

FoundationDB is setup using a Custom Resource Definition (CRD) file. The definition of this CRD is provided by the [FoundationDB Operator for Kubernetes](https://github.com/FoundationDB/fdb-kubernetes-operator). A copy of the operator's Chart is included in this repository for convenience.

The FoundationDBCluster resource is setup by the `fdb-cluster` Helm Chart:

```yaml
$ kubectl get FoundationDBCluster fdb-cluster -o yaml
apiVersion: apps.foundationdb.org/v1beta2
kind: FoundationDBCluster
metadata:
  annotations:
    meta.helm.sh/release-name: tigris-stack
    meta.helm.sh/release-namespace: default
  creationTimestamp: "2022-10-12T15:57:14Z"
  generation: 1
  labels:
    app.kubernetes.io/managed-by: Helm
  name: fdb-cluster
  namespace: default
  resourceVersion: "619"
  uid: 99df9cc3-0a78-4d2f-8da7-49df6645e9e9
spec:
  databaseConfiguration:
    redundancy_mode: single
    storage_engine: ssd-2
    usable_regions: 1
  minimumUptimeSecondsForBounce: 600
  processCounts:
    log: 1
    stateless: 1
  processes:
    general:
      customParameters:
      - trace_format=json
      podTemplate:
        spec:
          containers:
          - name: foundationdb
            resources:
              limits:
                cpu: 100m
                memory: 128Mi
              requests:
                cpu: 100m
                memory: 128Mi
      volumeClaimTemplate:
        spec:
          resources:
            requests:
              storage: 100Mi
  replaceInstancesWhenResourcesChange: false
  skip: false
  version: 7.1.7
```

FoundationDB is setup using above descriptor by `fdb-kubernetes-operator` which automatically creates the proper resources based on above, for instance:

```shell
$ kubectl get pods | grep fdb-cluster
pod/fdb-cluster-log-1                                       2/2     Running   0               102s
pod/fdb-cluster-stateless-1                                 2/2     Running   0               102s
pod/fdb-cluster-storage-1                                   2/2     Running   0               102s
```

### Tigris Search

The next component is installed via the Chart `tigris-search`. Tigris Search uses [TypeSense](https://github.com/typesense/typesense) under the hood. Our installation adds the `ts-node-mgr` component as a sidecar to help scaling TypeSense out for larger installations:

```shell
$ kubectl get pod tigris-search-0 -o yaml | grep -w image: | sort | uniq
    image: tigrisdata/ts-node-mgr:latest
    image: tigrisdata/typesense:latest
```

### Tigris Server

The final component installed is `tigris-server`. Tigris Server requires Ingress resources to operate so NGINX is included for the sake of simplicity.

Tigris Server uses both GRPC and HTTP for communication:

```yaml
$ kubectl get ingress tigris-server -o yaml
apiVersion: v1
items:
- apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    annotations:
      meta.helm.sh/release-name: tigris-stack
      meta.helm.sh/release-namespace: default
      nginx.ingress.kubernetes.io/rewrite-target: /
    creationTimestamp: "2022-10-12T15:57:14Z"
    generation: 1
    labels:
      app.kubernetes.io/component: server
      app.kubernetes.io/managed-by: Helm
      app.kubernetes.io/name: tigris-server
      app.kubernetes.io/part-of: tigris
    name: tigris-server
    namespace: default
    resourceVersion: "614"
    uid: 65d25c12-1a49-43f9-8b5f-4f6bad35fd61
  spec:
    ingressClassName: nginx
    rules:
    - http:
        paths:
        - backend:
            service:
              name: tigris-http
              port:
                number: 80
          path: /v1
          pathType: Prefix
        - backend:
            service:
              name: tigris-grpc
              port:
                number: 80
          path: /tigrisdata.v1.Tigris/
          pathType: Prefix
        - backend:
            service:
              name: tigris-grpc
              port:
                number: 80
          path: /tigrisdata.admin.v1.Admin/
          pathType: Prefix
        - backend:
            service:
              name: tigris-grpc
              port:
                number: 80
          path: /tigrisdata.auth.v1.Auth/
          pathType: Prefix
        - backend:
            service:
              name: tigris-grpc
              port:
                number: 80
          path: /tigrisdata.observability.v1.Observability/
          pathType: Prefix
        - backend:
            service:
              name: tigris-grpc
              port:
                number: 80
          path: /tigrisdata.management.v1.Management/
          pathType: Prefix
        - backend:
            service:
              name: tigris-grpc
              port:
                number: 80
          path: /HealthAPI/
          pathType: Prefix
  status:
    loadBalancer: {}
kind: List
metadata:
  resourceVersion: ""
```
