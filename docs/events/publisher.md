# Publishers

A publisher is responsible for publishing events on the topic. A topic can
have one or more publishers.

## Publish operations

Publish operations send new events to the topic which are then persisted and
indexed.

![Publish](/img/publish.jpg)

Tigris TypeScript SDK provides the following two APIs to publish events
to a topic:

- [publish()](../typescript/events/publish_subscribe#publish-a-single-message):
  publish a single event
- [publishMany()](../typescript/events/publish_subscribe#publish-many-messages):
  publish a batch of events

### Ordering of events

A topic is partitioned into 64 partitions by default. Events published to
topics are guaranteed to be ordered within a partition. If you require
global ordering across all events in a topic then you can explicitly set the
number of partitions to 1 while creating the topic.
