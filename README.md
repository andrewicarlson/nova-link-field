# Laravel Nova Link Field

## Purpose

This link field adds a customizable link to the Laravel Nova admin Index and Detail views. It can be used to expose clickable links using the data found in your models. For example, wrapping an email address in a `mailto:` or a Stripe Transaction ID in a link to the Stripe Dashboard.

### Detail View
![](github/detail.png?raw=true)

### Index View
![](github/index.png?raw=true)

### Edit View
![](github/edit.png?raw=true)

## Installation

1. `composer require carlson/nova-link-field`

## Usage

1. Include the dependency on the Nova Resource `use Carlson\NovaLinkField\Link;`
2. Add the resource to the `Fields` array
```
Link::make('Card Transaction', 'transaction_id')
    ->details([
        'href' => function () {
            return "https://dashboard.stripe.com/payments/{$this->transaction_id}";
        },
        'text' => function () {
            return $this->transaction_id;
        },
        'newTab' => true
    ]),
```

The Update view exposes the underlying model data as a text input.

## API

The Link field has a custom method `details` which accepts three properties:

1. `href: String | Callable`
2. `text: String | Callable`
3. `newTab: Boolean | Callable`

The value of the current field can be retrieved and used in the Link by using a `Callable` and using `{$this->field_name}`.