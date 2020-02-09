# Laravel Nova Link Field

## Purpose

This link field adds a customizable link to the Laravel Nova admin Index and Detail views. It can be used to expose clickable links using the data found in your models. For example, wrapping an email address in a `mailto:` or a Stripe Transaction ID in a link to the Stripe Dashboard.

### Detail View
![](github/Detail.png?raw=true)

### Index View
![](github/Index.png?raw=true)

### Edit View
![](github/Edit.png?raw=true)

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
        'newTab' => true,
        'class' => 'no-underline dim text-primary font-bold whitespace-no-wrap',
    ]),
```

The Update view exposes the underlying model data as a text input.

## API

The Link field has a custom method `details` which accepts the following properties (all are required unless otherwise indicated):

1. `href: String | Callable`
2. `text: String | Callable`
3. `newTab: Boolean | Callable`
4. `class: String | Callable` (optional) - accepts any Tailwind class names

The value of the current field can be retrieved and used in the Link by using a `Callable` and using `{$this->field_name}`.
