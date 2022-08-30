# Declaring Models

Models are regular Java model (POJO) comprised of primitive and wrapper Java types, or custom types.

```java
package com.tigrisdata.db.client.collection;

import com.tigrisdata.db.annotation.TigrisField;
import com.tigrisdata.db.annotation.TigrisPrimaryKey;
import com.tigrisdata.db.type.TigrisCollectionType;
import java.util.Objects;

@TigrisCollection(value = "catalog")
public class Catalog implements TigrisCollectionType {
  @TigrisField(description = "A unique identifier for the catalog item")
  @TigrisPrimaryKey(order = 1, autoGenerate = true)
  private int id;

  @TigrisField(description = "Product name")
  private String name;

  @TigrisField(description = "Product price")
  private double price;

  @TigrisField(description = "Brand name")
  private String brand;

  @TigrisField(description = "Categorized item label")
  private String labels;

  @TigrisField(description = "Product's popularity rating")
  private int popularity;

  public Catalog() {}

  public Catalog(String name, double price, String brand, String labels, int popularity) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.labels = labels;
    this.popularity = popularity;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public String getLabels() {
    return labels;
  }

  public void setLabels(String labels) {
    this.labels = labels;
  }

  public int getPopularity() {
    return popularity;
  }

  public void setPopularity(int popularity) {
    this.popularity = popularity;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Catalog catalog = (Catalog) o;
    return id == catalog.id && Double.compare(catalog.price, price) == 0
        && popularity == catalog.popularity && Objects.equals(name, catalog.name)
        && Objects.equals(brand, catalog.brand) && Objects.equals(labels,
        catalog.labels);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, price, brand, labels, popularity);
  }
}
```

This declaration will create a collection named `catalog`.

## Collection Names

The name of the collection is derived from the Java class name. The class name
name is pluralized to snake_cases as collection name. For example, the
Java class name `Catalog` is converted to `catalogs` as the collection name. While
the Java class name `ProductDetail` is converted to `product_details` as the
collection name.

In the majority of the cases you will not need to customize the collection name,
but if you do, you can customize the collection name by using the
`@TigrisCollection` annotation. For example, the code sample below creates a
collection named `product_catalog`.

```java
@TigrisCollection("product_catalog")
public class Catalog implements TigrisCollectionType {
    //...
}
```

## Field Names

The field names in the Java class definition are also used as the field names
in the collection's schema. There is no conversion performed by default.

You can optionally add description to your fields by using the annotation
`@TigrisField` as below

```java
public class Catalog implements TigrisCollectionType {

    @TigrisField(description = "Name of the product")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(name, user.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}
```
