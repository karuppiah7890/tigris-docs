# Event Streaming

Tigris has built-in event streaming support. You don’t need a separate component to manage your topics.
It allows you to both subscribe and publish to a topic. As Tigris indexes all your data automatically which means your topics
are both searchable and queryable.

## Key Concepts

- <b>Topic</b>: A topic here is a type of collection whose type is set as "messages".
- <b>Publish</b>: A topic can have one or more publishers. A publisher is responsible for publishing messages on the topic.
- <b>Subscribe</b>: A topic can have one or more subscribers. A subscriber consumes messages from a topic.
- <b>Partitions</b>: A topic has by default 64 partitions. Ordering is guaranteed in a single partition.
- <b>Key</b>: A key can be explicitly set to control the partitioning of messages. When a key is present in the topic
  schema then Tigris uses this key for partitioning otherwise the default behavior is to partition the messages by
  writing to partitions in a round-robin fashion.

## Features

- <b>Ordering Guarantee</b>: A single partition will have all the events ordered. For strict global ordering, you can
  explicitly set partition number as <b>1</b> while creating the topic.
- <b>Search</b>: You can search on your topic, similar to how search can be performed on a collection.
- <b>Query</b>: You can issue a read query by specifying filters on any field that is part of the topic.
- <b>Pagination</b>: The subscribe API supports streaming, so you don't need to worry about pagination and after
  subscribing you’ll receive messages in order from a single partition.
